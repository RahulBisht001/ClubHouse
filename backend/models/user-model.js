const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false,
        get: (avatar) => {
            if (avatar)
                return `${process.env.BASE_URL}${avatar}`
            return avatar
        }
    },
    activated: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true,
    toJSON: { getters: true },
})

module.exports = mongoose.model('User', userSchema, 'users')