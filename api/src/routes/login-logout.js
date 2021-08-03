const router = require('express').Router();
const {login, logout} = require('../controllers/login-logout')

router.post('/login', login);
router.post('/logout', logout);

module.exports = router;