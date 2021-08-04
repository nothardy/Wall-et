const { Router } = require('express');





const logRoutes = require("./login-logout");


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', logRoutes);



//router.use('/home', home);
//router.use("/register", register)



module.exports = router;
