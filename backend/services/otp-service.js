const crypto = require('crypto')
const hashService = require('./hash-service')
require('dotenv').config()

const smsSid = process.env.SMS_SID
const smsAuthToken = process.env.SMS_AUTH_TOKEN

const twilio = require('twilio')(smsSid, smsAuthToken, {
    lazyLoading: true
})


class otpService {

    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999)
        return otp
    }
    async sendBySms(phone, otp) {
        return await twilio.messages.create({
            to: phone,
            from: process.env.SMS_FROM_NUMBER,
            body: `Your ClubHouse OTP is :${otp}.`
        })
    }

    verifyOtp(hashedOtp, otp) {
        let computedHash = hashService.hashOtp(data)
        return computedHash === otp
    }
}

module.exports = new otpService()