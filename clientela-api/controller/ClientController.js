const ClientService = require('./../service/ClientService')

module.exports = class ClientController {

    static async findAll(req, res) {
        res.json(await ClientService.findAll())
    }

    static async create(req, res) {
        res.json(await ClientService.create(req.body))
    }

}