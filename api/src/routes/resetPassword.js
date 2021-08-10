const router = require('express').Router();
const {passwordReset, resetVerificaction} = require("../controllers/resetPassword")

<<<<<<< HEAD
router.post('/password', passwordReset);
router.post('/verification', resetVerificaction);
=======

router.post('/reset_password', passwordReset);
router.post('/update_password', resetVerificaction);
>>>>>>> cb47043f5ecb3af855f3167110c6f881faa12bc6

module.exports = router;