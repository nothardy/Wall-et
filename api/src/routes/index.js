const { Router } = require('express');
const logRoutes = require("./auth");



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/auth', logRoutes);





module.exports = router;
