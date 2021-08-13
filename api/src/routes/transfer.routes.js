const { Router } = require('express');
const route = Router();

const { Account } = require('../db')
const  transferCreator = require('../controllers/transferCreator')
const { verifyCVU } = require('../middlewares/verifyCVU')
const { verifyBalans } = require('../middlewares/balansCheck')

route.post('/verifyCVU', verifyCVU, async (req, res) => {
    try {
        const cvu = req.body.cvu;
        const user = await Account.findOne({ where: { cvu: cvu } })
        const a = {
            id: user.id,
            fullname: user.fullname,
            cvu: user.cvu,
            photo: user.photo,
            mail: user.mail,
        }
        
        res.status(200).json(a)
    }

    catch(err){
        res.status(404).json({err: err})
    }
})


route.put('/', verifyBalans, async (req, res) => {
    const { from, to, amount } = req.body;
    
    try {

        const create = await transferCreator( from, to, amount )
        !create ? res.status(404).json({ err: 'Transfer not created' }) : res.status(200).json('transfer created successfully')
    }

    catch(err) {
        res.status(404).json({ err: err })
    }
})

module.exports = route;