const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salon = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    photo: {
        type: String,
        required: [true, 'Photo is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    phone: {
        type: String,
    },
    address: {
        city: String,
        cep: String,
        number: String
    },
    geo: {
        type: String,
        coordinates: Array
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
})

salon.index({geo: '2dsphere'});

module.exports = mongoose.model('Salon', salon);