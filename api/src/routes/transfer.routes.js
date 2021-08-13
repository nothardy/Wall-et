const { Router } = require('express');
const route = Router();

const { Account } = require('../db')
const { verifyCVU } = require('../middlewares/verifyCVU')

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


module.exports = route;