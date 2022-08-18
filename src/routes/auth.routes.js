const { Router } = require('express');
const Client = require('../models/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const router = Router();

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if(!name || !email || !password){
            throw new Error(`All fields are required`)
        }

        const user = await Client.findOne({email});
        if(user){
            throw new Error ('User already exists')
        }

        const salt = bcrypt.genSaltSync(12);
        const hash = await bcrypt.hash(password, salt);

        const newClient = await Client.create({
            name,
            email,
            passwordHash: hash
        })

        res.status(200).json(newClient);

    } catch (error) {
        res.status(500).json({message: 'Signup cannot be done, please try again', error})
    }
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFromDb = await Client.findOne({email});
        if(!userFromDb){
            throw new Error(`User not found`)
        }
        const verifiedPasswordHash = bcrypt.compareSync(password, userFromDb.passwordHash);
        if(!verifiedPasswordHash){
            throw new Error(`Email or Password invalid!`)
        }

        const payload = {
            id: userFromDb._id, 
            name: userFromDb.name,
            email: userFromDb.email
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'});

        res.status(200).json({user: payload, token})

    } catch (error) {
        res.status(500).json({message: `Sorry, Please try logging again!`, error})
    }
})

module.exports = router;