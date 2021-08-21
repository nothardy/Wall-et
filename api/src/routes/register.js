const router = require('express').Router();
const { register, confirm } = require('../controllers/register');




router.post('/', register);
router.get('/:token', confirm)


module.exports = router;