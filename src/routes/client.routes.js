const express = require('express');
const router = express.Router();
const Client = require('../models/client')

//signup na rota de auth
// router.post('/', async (req, res) => {
//     try {
//         const client = await new Client(req.body).save();
//         res.json({ client });
//     } catch (error) {
//         res.json({error: true, message: error.message })
//     }
// })


router.get('/:clientId', async (req, res) => {
    try {
        const { clientId } = req.params;
        const client = await Client.findById(clientId);
        res.status(200).json(client)
    } catch (error) {
        res.json({error: true, message: error.message })
    }
})


router.get('/', async (req, res) => {
    try {
        const allClients = await Client.find();
        res.status(200).json(allClients)
    } catch (error) {
        res.json({error: true, message: error.message })
    }
})

router.put('/:clientId', async (req, res) => {
    try {
        const { clientId } = req.params;
        const updateClient = await Client.findByIdAndUpdate(
            clientId, 
            req.body, 
            {new:true}
        );
            res.status(200).json(updateClient);
    } catch (error) {
        res.status(500).json({message: `Update failed, try again`, error});
    }
})


router.delete('/:clientId', async (req, res) => {
    try {
        const { clientId } = req.params;
        await Client.findByIdAndDelete(clientId);
        res.status(200).json({message: `Client deleted`})

    } catch (error) {
        res.json({error: true, message: error.message })
        
    }
})


module.exports = router;