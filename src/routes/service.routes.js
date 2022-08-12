const express = require('express');
const router = express.Router();
// const Salon = require('../models/salon');
const Service = require('../models/service');

router.post('/', async (req, res) => {
    try {
        const service = await new Service(req.body).save();
        res.json({ service });
    } catch (error) {
        res.json({error: true, message: error.message })
    }
})



module.exports = router;