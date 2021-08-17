const Payment = "Payment",
  Services = "Services",
  Transfer = "Transfer";
const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
<<<<<<< HEAD
const {register} = require("../controllers/register.js");

const helpRoutes = require("./help");

const authRoutes = require("./auth");
const home = require('./home.routes');
const adminSearch = require('./searchUser.routes');
const resetPasswordRoutes = require('./resetPassword');

=======
const { register } = require("../controllers/register.js");
const logRoutes = require("./auth");
const contacts = require("./contacts");
>>>>>>> 7278b78737516fe0318ee5261060f093807e1e28

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const { Transaction, Account, transaction_acount } = require('../db');
const transaction = require("./transactions.routes");
const transfer = require("./transfer.routes");
const updateRoutes = require('./updateUser');
const uploadCard = require('./uploadCard');
const deleteCard = require('./deleteCard');
const deleteUser = require('./deleteUser');
const updatePhoto = require('./updatePhoto');
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
router.use('/updateUser', updateRoutes);
router.use('/card', uploadCard);
router.use('/deleteCard', deleteCard);
router.use('/deleteUser', deleteUser);
router.use('/updatePhoto', updatePhoto);
router.use("/transaction/transfer", transfer);
router.use("/help", helpRoutes);
router.use("/home", home);
router.use("/adminSearch", adminSearch);
router.use("/auth", authRoutes);
router.use("/resetPassword", resetPasswordRoutes);

module.exports = router;
