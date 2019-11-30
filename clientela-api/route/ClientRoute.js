const ClientController = require('./../controller/ClientController')

module.exports = class ClientRoute {

    constructor(app) {
        
        app.get('/clients', ClientController.findAll)
        app.post('/clients', ClientController.create)

    }

}