
const { Account } = require('../db');

const verifyBalans = async (req, res, next) => {
    try {
        const { from, to, amount } = req.body;
        !from || !to || !amount && res.status(404).json({ err: 'data not found' })
        
        const account = await Account.findByPk(from);

        account.balance === 0 || account.balance < amount ? res.status(404).json({err: `balance: ${account.balance}, insufficient for transaction`}) : amount < 0 ? res.status(404).json({err: `Amount: ${amount}, is invalid`}): next()
    }

    catch (err){
        console.log(err)
    }
}

module.exports =  {
    verifyBalans
}