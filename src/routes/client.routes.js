const express = require('express');
const router = express.Router();
const Client = require('../models/client')

router.post('/', async (req, res) => {
    try {
        const client = await new Client(req.body).save();
        res.json({ client });
    } catch (error) {
        res.json({error: true, message: error.message })
    }
})

//get one client
router.get('/:clientId', async (req, res) => {
    try {
        const { clientId } = req.params;
        const client = await Client.findById(clientId);
        res.status(200).json(client)
    } catch (error) {
        res.json({error: true, message: error.message })
    }
})


module.exports = router;