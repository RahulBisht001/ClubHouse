const tokenService = require('../services/token-service')

module.exports = async (req, res, next) => {

    let userData;
    try {
        const { accessToken } = req.cookies
        console.log("accessToken " + accessToken)

        if (!accessToken)
            throw new Error("accessToken error in middleware")

        userData = await tokenService.verifyAccessToken(accessToken)
        console.log("userData ")
        console.log(userData)
        if (!userData)
            throw new Error("userData error in middleware")

        req.user = userData
        next()
    }
    catch (err) {
        console.log("userData err")
        console.log(userData)
        console.log('Some Error in the Middleware ')
        console.log(err.message)
        res.status(401).json({
            message: 'Invalid Token'
        })
    }
}