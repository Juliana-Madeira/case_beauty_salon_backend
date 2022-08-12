const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const service = new Schema({
    salonId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salon',
    },
    hairdresserId: {
        type: mongoose.Types.ObjectId,
        ref: 'Hairdresser',        
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
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


module.exports = mongoose.model('Service', service);