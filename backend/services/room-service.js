const RoomModel = require('../models/room-model')

class RoomService {

    async create(payload) {

        const { topic, roomType, ownerId } = payload
        const room = await RoomModel.create({
            topic,
            roomType,
            ownerId,
            speakers: [
                ownerId
            ]
            //^ The owner of the room will be default speaker of the room
        })

        console.log("Room" + room)
        return room
    }

    async getAllRooms(types) {

        const rooms = await RoomModel
            .find({ roomType: { $in: types } })
            .populate('speakers')
            .populate('ownerId')
            .exec()

        return rooms

    }
}

module.exports = new RoomService()