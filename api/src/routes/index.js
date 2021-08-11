const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {register} = require("../controllers/register.js");
const logRoutes = require("./auth");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/register", register)
const home = require('./home.routes')
const adminSearch = require('./searchUser.routes')
const transaction = require('./transactions.routes')
/* const { Transaction, Account, transaction_acount } = require('../db');
const Payment="Payment",Services="Services",Transfer="Transfer"; */


router.use('/home', home);
router.use('/adminSearch', adminSearch);
router.use('/auth', logRoutes);
router.use('/transaction', transaction)


module.exports = router;
