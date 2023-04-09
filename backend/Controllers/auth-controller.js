const otpService = require('../services/otp-service')
const HashService = require('../services/hash-service')
const userService = require('../services/user-service')
const tokenService = require('../services/token-service')

const UserDto = require('../dtos/user-dto')

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
            await otpService.sendBySms(phone, otp)
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
        const { accessToken, refreshToken } = tokenService.generateTokens({
            _id: user._id,
            activated: false
        })

        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        })

        const userDto = new UserDto(user)
        res.json({ accessToken, user: userDto })
    }
}

module.exports = new AuthController()