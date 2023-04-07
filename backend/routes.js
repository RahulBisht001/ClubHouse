const express = require('express')

const router = express.Router()



router.post('/api/send-otp', (req, res) => {

    res.send('Hello From OTP Route')
})


module.exports = router