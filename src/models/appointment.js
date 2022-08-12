const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointment = new Schema({
    salonId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salon',
        required: true
    },
    clientId: {
        type: mongoose.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
    serviceId: {
        type: mongoose.Types.ObjectId,
        ref: 'Service',
        required: true,
    },
    hairdresserId: {
        type: mongoose.Types.ObjectId,
        ref: 'Hairdresser',
        required: true,
    },
    dateBooking: {
        type: Date,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Appointment', appointment);