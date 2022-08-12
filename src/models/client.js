const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const client = new Schema({
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
        required: [true, 'Phone is required']
    },
    gender: {
        type: String,
        enum: ['M', 'F']
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
})


module.exports = mongoose.model('Client', client);