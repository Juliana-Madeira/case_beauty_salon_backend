const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const client = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    photo: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    passwordHash: {
        type: String,
        required: [true, 'Password is required']
    },
    phone: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['M', 'F']
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
},

    {timestamps: true},
);


module.exports = mongoose.model('Client', client);