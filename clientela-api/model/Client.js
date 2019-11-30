const Mongoose = require('mongoose')

Mongoose.model('Client', {
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        default: ''
    },
    cpf: {
        type: String,
        unique: true,
        required: true,
        maxlength: 11,
        minlength: 11
    },
    address: {
        cep: {
            type: String,
            required: true,
            maxlength: 8,
            minlength: 8
        },
        street: {
            type: String,
            required: true
        },
        neighborhood: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        }
    }
})