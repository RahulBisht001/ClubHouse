const express = require('express')
const router = express.Router()

const authMiddleware = require('./middlewares/auth-middleware')

const authController = require('./Controllers/auth-controller')
const activateController = require('./Controllers/activateController')
const roomsController = require('./Controllers/roomsController')



router.post('/api/send-otp', authController.sendOTP)
router.post('/api/verify-otp', authController.verifyOtp)

router.post('/api/activate', authMiddleware, activateController.activate)

router.get('/api/refresh', authController.refresh)
router.post('/api/logout', authMiddleware, authController.logout)


router.post('/api/rooms', authMiddleware, roomsController.create)
router.get('/api/rooms', authMiddleware, roomsController.index)

module.exports = router