const express = require('express')
const router = express.Router()

const authMiddleware = require('./middlewares/auth-middleware')

const authController = require('./Controllers/auth-controller')
const activateController = require('./Controllers/activateController')



router.post('/api/send-otp', authController.sendOTP)
router.post('/api/verify-otp', authController.verifyOtp)
router.post('/api/activate', authMiddleware, activateController.activate)
router.get('/api/refresh', authController.refresh)

module.exports = router