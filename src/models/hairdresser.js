const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hairdresser = new Schema({
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
        type: String
    },
    address: {
        city: String,
        cep: String,
        number: String
    },
    status: {
        type: String,
        enum: ['A', 'I'],
        default: 'A'
    },
    salonId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salon'
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
})


module.exports = mongoose.model('Hairdresser', hairdresser);