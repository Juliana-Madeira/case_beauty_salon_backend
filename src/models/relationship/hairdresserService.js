const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hairdresserService = new Schema({
    serviceId: {
        type: mongoose.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    hairdresserId: {
        type: mongoose.Types.ObjectId,
        ref: 'Hairdresser',
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'I', 'E'],
        default: 'A'
    },    
    createDate: {
        type: Date,
        default: Date.now,
    },
})


module.exports = mongoose.model('HairdresserService', hairdresserService);