const { Router } = require('express');
const home = require('./home_user.routes')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/home', home)


module.exports = router;
