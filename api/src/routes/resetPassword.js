const router = require('express').Router();
const {passwordReset, resetVerificaction} = require("../controllers/resetPassword")


router.post('/reset_password', passwordReset);
router.post('/update_password/:userid', resetVerificaction);


module.exports = router;