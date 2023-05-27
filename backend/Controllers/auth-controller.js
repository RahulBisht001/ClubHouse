const otpService = require('../services/otp-service')
const HashService = require('../services/hash-service')
const userService = require('../services/user-service')
const tokenService = require('../services/token-service')

const UserDto = require('../dtos/user-dto')

require('dotenv').config()

class AuthController {
    async sendOTP(req, res) {
        const { phone } = req.body

        if (!phone) {
            res.status(400).json({ message: 'Phone Filed is Required' })
        }
        // Generate a Random OTP
        const otp = await otpService.generateOtp()

        const timeToLeave = 1000 * 60 * 2 // Expire Time : 2 Min
        const expires = Date.now() + timeToLeave
        const data = `${phone}.${otp}.${expires}`

        // Generate Hash 
        const hash = await HashService.hashOtp(data)
        // Send OTP on the Mobile Number of the User
        try {
            //^ we will unComment it later
            //todo -----------------------------------
            // await otpService.sendBySms(phone, otp)
            //todo ----------------------------------
            res.json({
                "hash": `${hash}.${expires}`,
                phone,
                otp
            })
        }
        catch (err) {
            console.log('OTP sending Error')
            console.log(err)

            res.json({
                message: 'Some Error Occured while sending the OTP to the User'
            })
        }

    }


    async verifyOtp(req, res) {

        const { otp, hash, phone } = req.body

        if (!otp || !hash || !phone) {
            res.status(400).json({
                message: 'All Fields are Required !'
            })
        }

        const [hashedOtp, expires] = hash.split('.')

        if (Date.now() > +expires) {
            res.status(400).json({
                message: 'OTP Expired !'
            })
        }

        const data = `${phone}.${otp}.${expires}`
        const isValid = otpService.verifyOtp(hashedOtp, data)
        if (!isValid) {
            return res.json({
                message: 'Invalid OTP'
            })
        }

        let user
        try {
            user = await userService.findUser({ phone })
            if (!user) {
                user = await userService.createUser({ phone })
            }
        } catch (err) {
            console.log('Error occured while finding the user in the Database')
            console.log(err.message)

            res.status(500).json({
                message: "DB Error while finding / creating user"
            })
        }


        // Tokens
        // console.log(user._id)
        const { accessToken, refreshToken } = await tokenService.generateTokens({
            _id: user._id,
            // activated: false
        })

        // console.log(`RefreshToken : ${refreshToken}`)
        // console.log(`AccessToken : ${accessToken}`)

        // Storing the refreshToken in the Server
        await tokenService.storeRefreshToken(refreshToken, user._id)


        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 10,
            httpOnly: true
        })

        res.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        })

        const userDto = new UserDto(user)

        /*
        auth inside the response is a flag which shows the client that
        accessToken and refreshToken are stored inside the cookie successfully 
        */
        res.json({ user: userDto, auth: true })
    }


    async refresh(req, res) {

        /*
          Steps: 
          1. get the Refresh Token from the Cookie
          2. check the Validity of RefreshToken
          3. Check if Refresh Token is Available in DataBase
          4. Check if user is available in DataBase
          5. Generate new Tokens
          6. Update refresh Token in the DataBase
          7. put these tokens in cookie
          8. send response
        */


        // Step 1 : get the Refresh Token from the Cookie
        const { refreshToken: refreshTokenFromCookie } = req.cookies

        // Step 2 : check the Validity of RefreshToken
        let userData  // (This is Token Data of particular User)

        try {
            // console.log(refreshTokenFromCookie)
            userData = await tokenService
                .verifyRefreshToken(refreshTokenFromCookie)
            // console.log(userData)
        } catch (err) {
            console.log(err.message)
            return res.status(401).json({
                message: 'Invalid Refresh Token 1'
            })
        }

        // Step 3 : Check if Refresh Token is Available in DataBase
        try {
            const token = await tokenService
                .findRefreshToken(userData._id, refreshTokenFromCookie)

            //^ ________ For Testing Purpose  ___________
            // console.log("--------------------")
            // console.log("UserID" + userData._id)
            // console.log("refreshTokenFromCookie " + refreshTokenFromCookie)
            // console.log(`Token : ${token}`)
            // console.log("--------------------")

            if (!token) {
                return res.status(401).json({
                    message: 'Invalid Refresh Token 2'
                })
            }
        }
        catch (err) {
            return res.status(500).json({
                message: 'Internal DataBase Error in authController '
            })
        }

        // Step 4 : Check if user is available in DataBase

        const user = await userService.findUser({ _id: userData._id })
        // console.log(`user is : ${user}`)
        if (!user)
            return res.status(404).json({
                message: 'User Not Found'
            })


        // Step 5 : Generate new Tokens

        const { accessToken, refreshToken } = await tokenService.generateTokens({
            _id: userData._id,
        })

        // console.log(`refreshToken auth : ${refreshToken}`)
        // Step 6 : Update refresh Token in the DataBase

        try {

            await tokenService.updateRefreshToken(userData._id, refreshToken)
        }
        catch (err) {
            console.log('Error while Updating the RefreshToken')
            res.status(500).json({
                message: 'Internal error'
            })
        }

        // Step  7 :  put these tokens in cookie
        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        })

        res.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        })


        const userDto = new UserDto(user)
        /*
        auth inside the response is a flag which shows the client that
        accessToken and refreshToken are stored inside the cookie successfully 
        */

        // Step  8 : send response
        res.json({ user: userDto, auth: true })
    }


    async logout(req, res) {
        const { refreshToken } = req.cookies;

        // delete refresh token from db
        await tokenService.removeToken(refreshToken);
        // delete cookies
        res.clearCookie('refreshToken');
        res.clearCookie('accessToken');

        res.json({ user: null, auth: false });
    }
}

module.exports = new AuthController()