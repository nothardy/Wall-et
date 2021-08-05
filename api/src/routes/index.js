const { Router } = require('express');
const route = require('./home.routes');
const home = require('./home.routes')
const { Transaction, Account, transaction_acount } = require('../db');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/home', home)

const creaate = async ( { from, to, amount, type_transaction, state, user } ) => {

    try{
        let [ transac, s ] = await Transaction.findOrCreate({where: {from, to, amount, type_transaction, state}})

        await transac.addAccounts(user)

        return s
    }
    catch(err){
        return err
    }
}

router.get('/create', async (req, res) => {
    try {

        const accounts = await Account.findAll({ where: {admin: false} })

        const transactions = [{
            from: accounts[1].id,
            to: accounts[0].fullname,
            amount: 700,
            type_transaction: 'fsdfafa',
            state: 'done',
            user: accounts[1].id
        }, {
            from: accounts[1].id,
            to: accounts[0].fullname,
            amount: 28,
            type_transaction: 'fsdfafa',
            state: 'done',
            user: accounts[1]
        }, {
            from: accounts[1].id,
            to: accounts[2].fullname,
            amount: 8000,
            type_transaction: 'fsdfafa',
            state: 'pending',
            user: accounts[1].id
        }, 
        {
            from: accounts[1].id,
            to: accounts[2].fullname,
            amount: 8000,
            type_transaction: 'fsdfafa',
            state: 'pending',
            user: accounts[1].id
        }, 
        {
            from: accounts[1].id,
            to: accounts[0].fullname,
            amount: 8000,
            type_transaction: 'fsdfafa',
            state: 'pending',
            user: accounts[1].id
        }, {
            from: accounts[1].id,
            to: accounts[2].fullname,
            amount: 750,
            type_transaction: 'fsdfafa',
            state: 'done',
            user: accounts[1].id
        }, {
            from: accounts[1].id,
            to: accounts[0].fullname,
            amount: 95,
            type_transaction: 'fsdfafa',
            state: 'done',
            user: accounts[1].id
        }]
        const s = await transactions.map(transac => creaate(transac))
        res.status(200).json(s)
    }
    catch(err){
        res.status(400).json({err: `Error: ${err}`})
    }
})


module.exports = router;
