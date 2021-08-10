require('dotenv').config();
const { Account } = require("../db");
<<<<<<< HEAD
const bcrypt = require("bcrypt");
const nodmailer = require("nodmailer");
const { MAIL_ACCOUNT, MAIL_PASSWORD } = process.env;


let resetCode

const passwordReset = async (req, res) => {
    const { mail } = req.body;

    if (!mail) return res.status(404).send("The mail doesn't exists");
    resetCode = Math.random().toString().slice(2, 7);

    // To send an mail, we must first define a transporter. We will do it as follows:
    const transporter = nodmailer.createTransport({
        service: "gmail",
        auth: {
            user: MAIL_ACCOUNT,
            pass: MAIL_PASSWORD,
        },
    }
    );
    // send mail with defined transport object
    const info = {
        from: MAIL_ACCOUNT, // sender address
        to: mail, // receiver adress
        subject: "Password Reset Request for Wall-et", //Subject mail
        text: "Hi, " + user + ". Here's your code to reset your password: " + resetCode + ". If you did not request a new password, please ignore this mail.",
    };

    await transporter.sendMail(info, function (error, info) {
        if (error) {
            res.status(400).json({ message: "Sorry, something went wrong. Please try again later." });
        } else {
            res.status(200).json({ message: "Code sent" });
        }
    });

};

const resetVerificaction = async (req, res) => {
    const { mail, reset_code, password } = req.body;
    try {
        const matchingCodes = (resetCode == reset_code)

        switch (step) {
            case "1":
                if (matchingCodes) return res.status(200).json({ message: "Code accepted"});

                if (!matchingCodes) return res.status(400).json({ message: "Code denied"});

            case "2":
                if (!password) return res.status(400).json({ message: "password cannot be null" });

                const user = await Account.findOne({ where: { mail: mail } });
                const hashedPassword = await bcrypt.hash(password, 12);
                user.password = hashedPassword
                await user.save();
                return res.json({ message: "Password changed successfully", ok: true });

        }
=======
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
            html: `<p> Hi ${user.fullname}. In order to reset your password, please </p>
            <a href="https://localhost:3001/resetPassword/reset_password?userid=${token}"> Click here </a>. 
            <p>If you did not request a new password, please ignore this mail. </p>`,
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
>>>>>>> cb47043f5ecb3af855f3167110c6f881faa12bc6
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }
}

<<<<<<< HEAD
module.exports= {
=======
module.exports = {
>>>>>>> cb47043f5ecb3af855f3167110c6f881faa12bc6
    passwordReset,
    resetVerificaction
}