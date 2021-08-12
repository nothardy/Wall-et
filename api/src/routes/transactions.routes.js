const { Router } = require('express');
const route = Router();


const Hashing = require('../controllers/hashing')


route.get('/entry',  async (req, res) => {
    const id = req.query;
    const code = await Hashing(id)
    
    try {
        
        res.status(200).json(code) 
    }
    catch (err){
        res.status(404).json({err: err})
    }
});

/* route.put('/entry', async (req, res) => {
    const { id, idCard } = req.query;
    const { card_num, card_security_num } = req.body;

    try {
        !id || !idCard || !card_num || !card_security_num && res.status(404).json({ err: 'date not found' }) 
    }

    catch(err) {
        res.status(404).json({err: err})
    }
}) */



module.exports = route;