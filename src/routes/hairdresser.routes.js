const express = require('express');
const router = express.Router();
const Hairdresser = require('../models/hairdresser');

//post new hairdresser
router.post('/', async (req, res) => {
    try {
        const hairdresser = await new Hairdresser(req.body).save();
        res.json({ hairdresser });
        
    } catch (error) {
        res.json({error: true, message: error.message })
    }
})

//get one hairdresser
router.get('/:hairdresserId', async (req, res) => {
    try {
        const {hairdresserId} = req.params;
        const hairdresser = await Hairdresser.findById(hairdresserId);
        res.status(200).json(hairdresser)

    } catch (error) {
        res.json({error: true, message: error.message })
    }
    
})

//get all hairdresser
router.get('/', async (req, res) => {
    try {
        const allHairdresser = await Hairdresser.find();
        res.status(200).json(allHairdresser)
    } catch (error) {
        res.json({error: true, message: error.message })
    }
})



module.exports = router;