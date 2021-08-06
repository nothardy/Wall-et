const { Router } = require('express');
const route = Router();

const redirectLogin = require('../middlewares/redirectLogin')
const { infoAdmin, infoUser } = require('../controllers/infoHome')

route.use('/', async (req, res) => {
    try {
        const { admin, mail } = req.query;
        const correo = 'Waleeeet@gmail.com';
        
        admin === 'true' ? res.status(200).json(await infoAdmin(mail)) : 
        res.status(200).json(await infoUser(correo))
    }
    catch(err){
        res.status(400).json({err: err})
    }
})

module.exports = route 