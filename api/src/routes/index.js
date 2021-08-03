const { Router } = require('express');
const home = require('./home.routes')
const logRoutes = require("./login-logout")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', logRoutes);
router.use('/home', home);


module.exports = router;
