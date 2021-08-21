const Stripe = require('stripe');
const { Transaction, Account, transaction_acount } = require('../db');
const stripe = new Stripe('sk_test_51JQI2JCeyw6LldwNL8hPjWr1Up7mtAc4F0JOqpKrZevSvLfrBEFqlntjlT6eIvzjhX6CbYG4bX64N0m62NMuWT8s00rtNNwgoq');

module.exports = {
    checkout: async (id, accountId, amount) => {
        try {
            const accountTo = await Account.findByPk(accountId)
            const payment = await stripe.paymentIntents.create({
                amount, 
                currency: "USD",
                payment_method: id,
                confirm: true,
            });

            const [ transfer, status ] = await Transaction.create({
                from: 'Card',
                to: accountId,
                amount: amount,
                type_transaction: 'Transfer',
                state: 'in progress'
            })
            await transfer.addAccounts('Card')
            status && await Account.update({balance: accountTo.balance + parseInt(amount)}, {where: {id: accountId}}) && await Transaction.update({state: 'done'}, { where: { id: transfer.id } })

            console.log(status)
            console.log(transfer)
            return status
        }
        catch(err){
            throw new Error(err)
            return 
        }
    }
}