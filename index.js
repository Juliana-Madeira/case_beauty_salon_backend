const express = require('express');
// const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db.config');
require('./config/db.config');
const router = express.Router();

connectDB();
const app = express();

// app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/auth', require('./src/routes/auth.routes'));
app.use('/salon', require('./src/routes/salon.routes'));
app.use('/client', require('./src/routes/client.routes'));
app.use('/service', require('./src/routes/service.routes'));
app.use('/hairdresser', require('./src/routes/hairdresser.routes'));
// app.use('/appointment', require('./src/routes/appointment.routes'));





app.listen(process.env.PORT, () => {
    console.log(`Web Service listening on port ${process.env.PORT}`);
});
