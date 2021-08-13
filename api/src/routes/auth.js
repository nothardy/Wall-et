const router = require('express').Router();
const { login, logout} = require('../controllers/auth');

router.post('/login', login);
router.get('/logout', logout);


module.exports = router;