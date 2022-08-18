require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connect to mongo: ${connection.connections[0].name}`);
    } catch (error) {
        console.log('Error to connect to DB')
    }
}

module.exports = connectDB;