const router = require('express').Router();
const {passwordReset, resetVerificaction} = require("../controllers/resetPassword")


router.post('/recover_password', passwordReset);
router.post('/reset_password', resetVerificaction);

module.exports = router;