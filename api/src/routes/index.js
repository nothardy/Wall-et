const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {register} = require("../controllers/register")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/register", register)

module.exports = router;
