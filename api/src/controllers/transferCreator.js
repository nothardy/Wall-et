const { Transaction, Account, transaction_acount } = require('../db');
const { mailTransfer } = require('./mailTransfer')


const autentification = async ({ id, from, to, amount }) => {

    try {
        const accountFrom = await Account.findByPk(from)
        const accountTo = await Account.findByPk(to)
        
        await Transaction.update({state: 'in progress'}, { where: { id: id } })
        
        const balanceFrom = await Account.update({balance: accountFrom.balance - parseInt(amount)}, {where: {id: from}})
        const balanceTo = await Account.update({balance: accountTo.balance + parseInt(amount)}, {where: {id: to}})
        
        balanceFrom && balanceTo && await Transaction.update({state: 'done'}, { where: { id: id } }) && await mailTransfer( from, to )
    }
    catch(err){
        console.log(err)
        return err
    }
    
}


const TransactionCreator = async ( from, to, amount ) => {
    try{
        const transfer = await Transaction.create({
            from: from,
            to: to,
            amount: amount,
            type_transaction: 'Transfer',
            state: 'pending'
        })

        await transfer.addAccounts(from)
        await autentification(transfer)
        return transfer ?  true : false
    }

    catch(err){
        console.log(err)
        throw new Error(err)
    }
}


module.exports = TransactionCreator