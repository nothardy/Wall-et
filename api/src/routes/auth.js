const router = require('express').Router();
const { login, logout} = require('../controllers/login-logout');
const { verifyToken } =require('../middlewares/verifyToken') // esto es para cuando se implemente rutas que
//requieran la info del usuario. Necesita la autorizacion
const {Account} = require('../db')

router.post('/login', login);
router.post('/logout', logout);

//---------ESTO HAY QUE ELIMINARLO AL UNIR TODAS LAS BRANCH
router.post('/register', async (req, res) => {
    try {const { mail, password } = req.body;
    const user = {
        mail,
        password
    }
    const newUser = await Account.create(user);
    return res.send(newUser);
} catch {}
});
//------------------------------------------------------


module.exports = router;