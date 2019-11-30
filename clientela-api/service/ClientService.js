const Mongoose = require('mongoose')
const Client = Mongoose.model('Client')

module.exports = class ClientService {

    static async findAll() {
        return await Client.find({})
    }

    static async create(client) {
        return await Client.create(client)
    }

}