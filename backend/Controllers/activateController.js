const jimp = require('jimp')
const path = require('path')
const userDto = require('../dtos/user-dto')
const userService = require('../services/user-service')

class ActivateController {
    async activate(req, res) {

        const { name, avatar } = req.body

        if (!name || !avatar)
            res.status(400).json({
                message: 'All Fields are required'
            })
        const buffer = Buffer.from(
            avatar.replace(/^data:image\/(png|jpg|jpeg|avif|svg|webp|ico);base64,/, ''),
            'base64'
        )

        const imagePath = `${Date.now()}-${Math.round
            (Math.random() * 1e9)}.png `


        try {
            const jimpRes = await jimp.read(buffer)
            jimpRes.resize(150, jimp.AUTO).write(path.resolve(__dirname, `../storage/${imagePath}`))
        }
        catch (err) {
            console.log('Error in activateController')
            console.log(err)
            res.status(500).json({ message: 'Could not process the img ' })
        }

        // Update user Basically change Activated to True

        const userId = req.user._id

        try {
            const user = await userService.findUser({ _id: userId })
            if (!user) {
                res.status(404).json({
                    message: 'User Not Found'
                })
            }

            user.name = name
            user.activated = true
            user.avatar = `/storage/${imagePath}`

            user.save()

            res.json({
                user: new userDto(user), auth: true
            })
        }

        catch (err) {
            console.log('Error in activateController with find user Query')
            console.log(err)
            res.status(500).json({ message: 'DB Error with findUser function' })
        }
    }
}

module.exports = new ActivateController()