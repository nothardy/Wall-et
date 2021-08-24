const { Router } = require('express');
const router = Router();
const { Account } = require("../db");


router.get('/temp', async (req, res) => {
    try {
        // get the token
        const token = req.headers['x-access-token'];
        // if the token doesn't exists
        if (!token) return res.status(401).send({ auth: false, message: "no Token aws Provided" });
        //decoding the token
        const decoded = await jwt.decode(token, "mysecretkey");
        return res.json({ expired: false });
    } catch (err) {
        //if the token is expired, it goes into catch, so in this case it returns true.
        return res.json({ expired: true });
    }
})

router.get('/renew', async (req, res) => {
    try {
        // get the token
        const oldtoken = req.headers['x-access-token'];
        // if the token doesn't exists
        if (!oldtoken) return res.status(401).send({ auth: false, message: "no Token aws Provided" });
        // decoding the token
        const decoded = await jwt.verify(oldtoken, "mysecretkey");
        // get the decoded id 
        const { id } = decoded;
        //finding user
        const user = await Account.findByPk(id);
        //create a new token
        const newtoken = jwt.sign({ id: user.id }, "mysecretkey", {
            expiresIn: 60 * 30, // 60*30 = 30min
        });
        //return newtoken
        return res.status(200).json({
            auth: true,
            token: newtoken,
          });;

    } catch (err){
        res.status(400).json({ err: err })
    }
})


module.exports = router