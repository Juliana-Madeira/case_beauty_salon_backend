const express = require('express');
const router = express.Router();
const Salon = require('../models/salon');
const Service = require('../models/service');

router.post('/', async (req, res) => {
    try {
        const salon = await new Salon(req.body).save();
        res.json({ salon });
    } catch (error) {
        res.json({error: true, message: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const allSalon = await Salon.find();
        res.status(200).json(allSalon)
    } catch (error) {
        res.json({error: true, message: error.message })
    }
})

router.get('/:salonId', async (req, res) => {
    try { 
        const { salonId } = req.params;
        const salon = await Salon.findById(salonId)
        res.status(200).json(salon)
    } catch (error) {
        res.json({error: true, message: error.message })        
    }
})





router.get('/services/:salonId', async(req, res) => {
    try {
        const { salonId } = req.params;
        const services = await Service.find({
            salonId,
            status: 'A'
        }).select('_id name');
        res.json({
            services: services.map(service => ({ label: service.name, value: service._id}))
        })
    } catch (error) {
        res.json({error: true, message: error.message })
    }
})

module.exports = router;