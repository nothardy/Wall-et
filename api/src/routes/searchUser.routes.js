const { Router } = require('express');
const route = Router();

const  search  = require('../controllers/searchUser')

route.get('/', async (req, res) => {
    try {
        const {mail} = req.query;
        
        res.status(200).json(await search(mail))
    }

    catch (err) {
        res.json(404).json({err: `Error ${err}`})
    }
})

module.exports = route;