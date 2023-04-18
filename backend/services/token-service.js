const jwt = require('jsonwebtoken')
require('dotenv').config()


const refreshModel = require('../models/refresh-model')

const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET


class TokenService {

    async generateTokens(payload) {
        const accessToken = jwt.sign(payload, accessTokenSecret, {
            expiresIn: '1m'
        })
        const refreshToken = jwt.sign(payload, refreshTokenSecret, {
            expiresIn: '1y'
        })
        // console.log(`RefreshToken : ${refreshToken}`)
        // console.log(`AccessToken : ${accessToken}`)
        return { accessToken, refreshToken }
    }

    async storeRefreshToken(token, userId) {
        // console.log(token)
        // console.log(userId)
        try {
            await refreshModel.create({
                token,
                userId,
            })
        }
        catch (err) {
            console.log('Some Error in the storeRefreshToken method inside token Service')
            console.log(err.message)
        }
    }

    async verifyAccessToken(token) {

        return jwt.verify(token, accessTokenSecret)
    }

    async verifyRefreshToken(refreshToken) {
        return jwt.verify(refreshToken, refreshTokenSecret)
    }

    async findRefreshToken(userId, refreshToken) {

        return await refreshModel.findOne({
            userId: userId,
            token: refreshToken
        })
    }

    async updateRefreshToken(userId, refreshToken) {

        console.log(`refreshToken Token service : ${refreshToken}`)
        return await refreshModel.updateOne(
            { userId: userId },
            { token: refreshToken }
        )
    }

    async removeToken(refreshToken) {

        return await refreshModel.deleteOne({
            token: refreshToken
        })
    }
}

module.exports = new TokenService()