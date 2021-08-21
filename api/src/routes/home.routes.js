const { Router } = require('express');
const route = Router();
const { verifyToken } = require('../middlewares/verifyToken')


const { infoUser } = require('../controllers/infoHome')

route.get('/', verifyToken, async (req, res) => {
    try {
        const id = req.userId
        const info = await infoUser(id)
        //res.status(200).json(await infoAdmin(mail)) 
        res.status(200).json(info)
    }
    catch(err){
        res.status(400).json({err: err})
    }
})

module.exports = route 