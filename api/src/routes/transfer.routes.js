const { Router } = require('express');
const route = Router();

const { Account } = require('../db')
const transferCreator = require('../controllers/transferCreator')
const { verifyCVU } = require('../middlewares/verifyCVU')

route.get('/verifyCVU', verifyCVU, async (req, res) => {
    try {
        const cvu = req.body;
        const user = await Account.findOne({ where: { cvu: cvu } })
        const a = {
            id: user.dataValues.id,
            fullname: user.dataValues.fullname,
            cvu: user.dataValues.cvu,
            photo: user.dataValues.photo,
            mail: user.dataValues.mail,
        }
        
        res.status(200).json(a)
    }

    catch(err){
        res.status(404).json({err: err})
    }
})


/* route.put('/', async (req, res) => {
    const { from, to, amount, type_transaction } = req.body;
    
    try {

        const create = await transferCreator( from, to, amount, type_transaction )

        !from || !to || !amount || !type_transaction || !state ? res.status(404).json({ err: 'data not found' }) : !create ? res.status(404).json({ err: 'Transfer not created' }) : res.status(200).json('transfer created successfully')
    }

    catch(err) {
        res.status(404).json({ err: err })
    }
}) */

module.exports = route;