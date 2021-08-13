const { Transaction, Account, transaction_acount } = require('../db');

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

        return transfer ?  true : false
    }

    catch(err){
        throw new Error({err: err})
    }
}

const transactionInProgres = async (transfer) => {
    const from = await Account.findByPk(transfer.from);
    const to = await Account.findByPk(transfer.to);

    
}

module.exports = TransactionCreator 