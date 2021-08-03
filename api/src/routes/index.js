const { Router } = require('express');
<<<<<<< HEAD
const logRoutes = require("./login-logout")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
=======
const home = require('./home.routes')


>>>>>>> 365a7c71ab2e3f4008d5b07dc6b06f7f7c6ecf8a
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', logRoutes);

router.use('/home', home)


module.exports = router;
