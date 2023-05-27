require('dotenv').config()

const UserDto = require('../dtos/user-dto')
const RoomDto = require('../dtos/room-dto')

const roomService = require('../services/room-service')




class RoomsController {
    async create(req, res) {

        //^ basic validation of data 
        const { topic, roomType } = req.body

        if (!topic || !roomType) {
            return res
                .status(400)
                .json({
                    message: "All fields are required !"
                })
        }

        const room = await roomService.create({
            topic,
            roomType,
            ownerId: req.user._id
        })

        return res.json(new RoomDto(room))
    }

    //? It will send all the rooms available rooms to the client
    async index(req, res) {

        const rooms = await roomService.getAllRooms(['open'])

        const allRooms = rooms.map((room) => new RoomDto(room))
        // console.log("backend rooms")
        // console.log(allRooms)
        return res
            .status(200)
            .json(allRooms)
    }
}


module.exports = new RoomsController()