const router = require('express').Router();
const { login, logout} = require('../controllers/login-logout');
const { verifyToken } =require('../middlewares/verifyToken') // esto es para cuando se implemente rutas que
//requieran la info del usuario. Necesita la autorizacion

router.get('/getToken', (req, res)=> {
    const token = req.headers['x-access-token'];
    return res.send(token)
})
router.post('/login', login);
router.post('/logout', logout);


module.exports = router;