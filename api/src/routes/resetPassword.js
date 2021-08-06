const router = require('express').Router();
const {passwordReset, resetVerificaction} = require("../controllers/resetPassword")

router.post('/password', passwordReset);
router.post('/verification', resetVerificaction);

module.exports = router;