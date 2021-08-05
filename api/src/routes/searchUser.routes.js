const { Router } = require('express');
const route = Router();

const  search  = require('../controllers/searchUser')

route.get('/', async (req, res) => {
    try {
        const userMail = req.body;
        
        res.status(200).json(await search(userMail))
    }

    catch (err) {
        res.json(404).json({err: `Error ${err}`})
    }
})

module.exports = route;