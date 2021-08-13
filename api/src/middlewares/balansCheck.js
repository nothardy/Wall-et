
const { Account } = require('../db');

const verifyBalans = async (req, res, next) => {
    try {
        const { from, to, amount } = req.body;
        //const amount = parseInt(req.amount)

        if(!from || !to || !amount) throw new Error('data not found')
        
        const account = await Account.findByPk(from);
        
        if(amount < 0) {
            res.status(404)
            throw new Error(`Amount: ${amount}, is invalid`)
        }
        if(account.dataValues.balance === 0 || account.dataValues.balance < amount) {
            res.status(404)
            throw new Error(`balance: ${account.dataValues.balance}, insufficient for transaction`)
    }  
        next()
    }

    catch (err){
        res.status(404).json(err)
        console.log(err)
        return
    }
}

module.exports =  {
    verifyBalans
}