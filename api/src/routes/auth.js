const router = require('express').Router();
const { login, logout} = require('../controllers/auth');
const { verifyToken } =require('../middlewares/verifyToken') // esto es para cuando se implemente rutas que
//requieran la info del usuario. Necesita la autorizacion

router.post('/login', login);
router.get('/logout', logout);


module.exports = router;