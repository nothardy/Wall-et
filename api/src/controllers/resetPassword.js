require('dotenv').config();
const { Account } = require("../db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { MAIL_ACCOUNT, MAIL_PASSWORD } = process.env;
// npm install nodemailer

const passwordReset = async (req, res) => {
    const { mail } = req.body;
    const user = Account.findOne({ where: { mail: mail } })
    if (!user) return res.status(404).send("The mail is not registered");

    // To send an mail, we must first define a transporter. We will do it as follows:
    const transporter = nodemailer.createTransport({
        auth: {
            user: MAIL_ACCOUNT,
            pass: MAIL_PASSWORD,
        },
    });
    // send mail with defined transport object

    const token = jwt.sign({ id: user.id }, "mysecretkey", {
        expiresIn: 60 * 2, // 2min
    });

    const info = {
        from: MAIL_ACCOUNT, // sender address
        to: mail, // receiver adress
        subject: "Password Reset Request for Wall-et", //Subject mail
        html: "<p> Hi, " + user.fullname + "In order to reset your password, please <a href='http://localhost:3000/update_password?userid='" + token + ">Click here </a>. If you did not request a new password, please ignore this mail. </p>",
    };

    await transporter.sendMail(info, function (error, info) {
        if (error) {
            res.status(400).json({ message: "Sorry, something went wrong. Please try again later." });
        } else {
            res.status(200).json({ message: "Mail sent"});
        }
    });

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