const { Router } = require('express');
const route = Router();

const { Account } = require('../db')
const transferCreator = require('../controllers/transferCreator')
const { verify } = require('../middlewares/verifyCVU')
const { verifyBalans } = require('../middlewares/balansCheck')

route.post('/verifyCVU', verify, async (req, res) => {
    try {
        const data = req.body.data.replace(' ', '');
        let user;
        data.includes('@') ? user = await Account.findOne({ where: { mail: data }}) : user = await Account.findOne({ where: { cvu: data }})

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


route.post('/', verifyBalans, async (req, res) => {
    const { from, to } = req.body;
    const amount = parseInt(req.body.amount)

    try {
        const create = await transferCreator( from, to, amount )
        if(!create){ 
            res.status(404)
            throw new Error('Transfer not created')
        } 
        create && res.status(200).json(create)
    }

    catch(err) {
        console.log(err)
        res.status(404).json(err)
    }
})

module.exports = route;