const router = require('express').Router();
const {login, logout} = require('../controllers/login-logout')
const { Account } = require ('../db');

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', async (req, res) => {
    const { id, name, mail, password } = req.body;
            const user = {
                name,
                mail,
                password
            }
            await Account.create(user);
            return res.redirect('/');
    res.redirect('/register')
});
module.exports = router;