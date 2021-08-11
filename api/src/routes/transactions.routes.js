const { Router } = require('express');
const route = Router();
const { verifyToken } = require('../middlewares/verifyToken')

const Hashing = require('../controllers/hashing')


route.get('/entry', verifyToken, async (req, res) => {
    const id = req.userId;
    const code = await Hashing(id)
    try {
        res.status(200).json(code) 
    }
    catch (err){
        res.status(404).json({err: err})
    }
});

/* route.put('/entry', verifyToken, async (req, res) => {
    const id = req.userId;
    const { card_num, card_security_num_ } = req.body;

    try {

    }

    catch(err) {
        res.status(404).json({err: err})
    }
}) */



module.exports = route;