const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
require('./database');
const router = express.Router();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.set('port', 8000);

app.use('/salon', require('./src/routes/salon.routes'));
app.use('/client', require('./src/routes/client.routes'));
app.use('/service', require('./src/routes/service.routes'));
app.use('/hairdresser', require('./src/routes/hairdresser.routes'));
// app.use('/appointment', require('./src/routes/appointment.routes'));





app.listen(app.get('port'), () => {
    console.log(`Web Service listening on port ${app.get('port')}`);
});
