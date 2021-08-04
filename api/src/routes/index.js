const { Router } = require('express');
const home = require('./home.routes')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/home', home)


module.exports = router;
