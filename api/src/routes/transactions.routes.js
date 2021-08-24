const { Router } = require('express');
const route = Router();
const { verifyCard } = require('../middlewares/verifyCard.js')

const Hashing = require('../controllers/hashing');
const { checkout } = require('../controllers/stripeCard');

route.get('/entry',  async (req, res) => {
    
   try {
        const {id} = req.query;
        const code = await Hashing(id)
        res.status(200).json(code) 
    } 
    catch (err){
        res.status(404).json({err: err})
    }
   
});

route.post('/card', verifyCard, async(req, res) => {
    try {
        const { /* id, */ card_num, account_id, main } = req.body;
        const amount = parseInt(req.body.amount)
        
        await checkout(card_num, account_id, amount, main) && res.status(200).json({msj: 'Gooooood!'})
        
    }   
    catch(err){
        console.error('sdsssssss', err)
        return res.status(404).send(err)
    }
})


module.exports = route;