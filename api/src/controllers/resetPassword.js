require('dotenv').config();
const { Account } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { MAIL_ACCOUNT, MAIL_PASSWORD } = process.env;
// npm install nodemailer

const passwordReset = async (req, res) => {
    const { mail } = req.body;
    try {
        const user = await Account.findOne({ where: { mail: mail } })
        if (!user) return res.status(404).send("The mail is not registered");

        // To send an mail, we must first define a transporter. We will do it as follows:
        const transporter = nodemailer.createTransport({
              service: "gmail",
              host: "smtp.gmail.com",
              auth: {
                user: MAIL_ACCOUNT,
                pass: MAIL_PASSWORD,
              },
              tls: {rejectUnauthorized: false},
            })
        
        await transporter.verify().then(()=> console.log("ready to send email"))
        // send mail with defined transport object

        const token = await jwt.sign({ id: user.id }, "mysecretkey", {
            expiresIn: 60 * 10, // 10min
        });

        await transporter.sendMail({
            from: MAIL_ACCOUNT, // sender address
            to: mail, // receiver adress
            subject: "Password Reset Request for Wall-et", //Subject mail
            html: `<b> Hi ${user.fullname}. In order to reset your password, please </b>
            <a href="localhost:3001/resetPassword/reset_password?userid=${token}"> Click here </a>. 
            <b>If you did not request a new password, please ignore this mail. </b>`,
        });

        return res.status(200).json({msg: "mail sent"})
    }catch(error){
        res.status(400).json({msg: error})
    }
};

const resetVerificaction = async (req, res) => {
    const { userid } = req.query;
    if (!userid) return res.status(404).json({ message: "Invalid link" })
    try {
        const decoded = await jwt.verify(token, "mysecretkey");
        if (!decoded) return res.status(500).json({ message: "Expired link" })
        const user = await Account.findByPk(decoded.id);
        const hashedPassword = await bcrypt.hash(password, 12);
        user.password = hashedPassword
        await user.save();
        return res.json({ message: "Password changed successfully", ok: true });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    passwordReset,
    resetVerificaction
}