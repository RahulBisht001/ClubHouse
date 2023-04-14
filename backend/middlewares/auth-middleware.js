const tokenService = require('../services/token-service')

module.exports = async (req, res, next) => {

    let userData;
    try {
        const { accessToken } = req.cookies
        if (!accessToken)
            throw new Error()

        userData = await tokenService.verifyAccessToken(accessToken)
        if (!userData)
            throw new Error()

        req.user = userData
        next()
    }
    catch (err) {
        console.log(userData)
        console.log('Some Error in the Middleware ')
        console.log(err.message)
        res.status(401).json({
            message: 'Invalid Token'
        })
    }
}