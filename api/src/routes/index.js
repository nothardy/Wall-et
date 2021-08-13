const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {register} = require("../controllers/register.js");
const logRoutes = require("./auth");
const helpRoutes = require("./help");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/register", register)
const home = require('./home.routes')
const adminSearch = require('./searchUser.routes')
const { Transaction, Account, transaction_acount } = require('../db');
const Payment="Payment",Services="Services",Transfer="Transfer";

router.use('/help', helpRoutes);
router.use('/home', home);
router.use('/adminSearch', adminSearch);
router.use('/auth', logRoutes);

const creaate = async ({ from, to, amount, type_transaction, state, user }) => {

    try{
        let [ transac, s ] = await Transaction.findOrCreate({ where: {from, to, amount, type_transaction, state }})

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
            type_transaction: Payment,
            state: 'done',
            user: accounts[1].id
        }, {
            from: accounts[1].id,
            to: accounts[0].fullname,
            amount: 28,
            type_transaction: Services,
            state: 'done',
            user: accounts[1]
        }, {
            from: accounts[1].id,
            to: accounts[2].fullname,
            amount: 8000,
            type_transaction: Transfer,
            state: 'pending',
            user: accounts[1].id
        }, 
        {
            from: accounts[1].id,
            to: accounts[2].fullname,
            amount: 8000,
            type_transaction: Payment,
            state: 'pending',
            user: accounts[1].id
        }, 
        {
            from: accounts[1].id,
            to: accounts[0].fullname,
            amount: 8000,
            type_transaction: Payment,
            state: 'pending',
            user: accounts[1].id
        }, {
            from: accounts[1].id,
            to: accounts[2].fullname,
            amount: 750,
            type_transaction: Services,
            state: 'done',
            user: accounts[1].id
        }, {
            from: accounts[1].id,
            to: accounts[0].fullname,
            amount: 95,
            type_transaction: Services,
            state: 'done',
            user: accounts[1].id
        }]

        const s = await transactions.map(transac => creaate(transac))
        res.status(200).json(s)
    }
    catch(err){
        res.status(400).json(err)
    }
})


module.exports = router;
