const router = require('express').Router();
const { help } = require('../controllers/help');

router.post('/', help);

module.exports = router;