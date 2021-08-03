const { Router } = require('express');
const route = Router();
const controllers = require('../controllers/home')

route.get('/', async (req, res) => {
    
    const mail = req.body.mail;
    try{
        const data = await controllers.user(mail)

        res.status(200).json(data)
    }

    catch (err) {
        res.status(404).json(`Error: ${err}`)
    }
})

module.exports = route 