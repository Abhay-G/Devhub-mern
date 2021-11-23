const RoomModel = require('../models/room-modal.js');
class RoomService {
    async create(payload) {
        const { topic, roomType, ownerId } = payload;
        let room;
        try {
            room = await RoomModel.create({
                topic,
                roomType,
                ownerId,
                speakers: [ownerId],
            });
        } catch (err) {
            console.log(err);
        }
        return room;
    }
    async getAllRooms(types) {
        let rooms;
        try {
            rooms = await RoomModel.find({ roomType: { $in: types } })
                .populate('speakers')
                .populate('ownerId')
                .exec();
        } catch (err) {
            console.log(err);
        }
        return rooms;
    }
}
module.exports = new RoomService();
