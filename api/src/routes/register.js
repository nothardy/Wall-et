const router = require('express').Router();
const { register, confirm } = require('../controllers/register');




router.post('/', register);
//router.post('/update_password/:userid', resetVerificaction);
router.get('/:token', confirm)


module.exports = router;