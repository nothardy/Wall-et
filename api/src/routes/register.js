const router = require('express').Router();
const { register } = require('../controllers/register');




router.post('/', register);
//router.post('/update_password/:userid', resetVerificaction);



module.exports = router;