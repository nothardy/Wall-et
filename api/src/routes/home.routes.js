const { Router } = require('express');
const route = Router();

const redirectLogin = require('../middlewares/redirectLogin')
const { infoAdmin, infoUser } = require('../controllers/infoHome')

route.use('/', async (req, res) => {
    try {
        const loger = req.query.admin;

        loger === 'true' ? res.status(200).json(await infoAdmin()) : 
        res.status(200).json(await infoUser())
    }
    catch(err){
        res.status(400).json({err: err})
    }
})

module.exports = route 