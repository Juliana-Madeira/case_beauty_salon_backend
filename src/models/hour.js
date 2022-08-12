const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hour = new Schema({
    salonId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salon',
        required: true
    },
    hairdresserId: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hairdresser',
        required: true,
    }],
    service: [{
        type: mongoose.Types.ObjectId,
        ref: 'Service',
        required: true,
    }],
    days: {
        type: [Number],
        required: true
    },
    initial: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
})


module.exports = mongoose.model('Hour', hour);