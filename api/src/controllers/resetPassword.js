require('dotenv').config();
const { Account } = require("../db");
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
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports= {
    passwordReset,
    resetVerificaction
}