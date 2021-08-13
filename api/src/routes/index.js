const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {register} = require("../controllers/register.js");
<<<<<<< HEAD
const authRoutes = require("./auth");
const home = require('./home.routes');
const adminSearch = require('./searchUser.routes');
const resetPasswordRoutes = require('./resetPassword')
=======
const logRoutes = require("./auth");
const helpRoutes = require("./help");
>>>>>>> 1260c6eb53d9b637662aed0691dd6b3f0da0a5c5

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

<<<<<<< HEAD


router.use("/register", register);
=======
router.use('/help', helpRoutes);
>>>>>>> 1260c6eb53d9b637662aed0691dd6b3f0da0a5c5
router.use('/home', home);
router.use('/adminSearch', adminSearch);
router.use('/auth', authRoutes);
router.use('/resetPassword', resetPasswordRoutes);


module.exports = router;
