const Payment = "Payment",
  Services = "Services",
  Transfer = "Transfer";
const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { register } = require("../controllers/register.js");
const logRoutes = require("./auth");
const contacts = require("./contacts");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const transaction = require("./transactions.routes");
const transfer = require("./transfer.routes");
/* const { Transaction, Account, transaction_acount } = require('../db');
const Payment="Payment",Services="Services",Transfer="Transfer"; */

const helpRoutes = require("./help");

const authRoutes = require("./auth");
const home = require("./home.routes");
const adminSearch = require("./searchUser.routes");
const resetPasswordRoutes = require("./resetPassword");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//router.use('/auth', logRoutes);

router.use("/contacts", contacts);
router.use("/register", register);
router.use("/transaction", transaction);
router.use("/transaction/transfer", transfer);
router.use("/help", helpRoutes);
router.use("/home", home);
router.use("/adminSearch", adminSearch);
router.use("/auth", authRoutes);
router.use("/resetPassword", resetPasswordRoutes);

module.exports = router;
