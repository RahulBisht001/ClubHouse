const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true
    },
    activated: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema, 'users')