require('dotenv').config();
const { Account } = require("../db");
const nodmailer = require("nodmailer");
const {MAIL_ACCOUNT, MAIL_PASSWORD} = process.env;
// npm install nodmailer

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
            res.status(200).json({ message: "Code sent", ok: true });
          }
        });
      
};

const resetVerificaction = async (req, res) => {
    const { mail, reset_code, password } = req.body;
    try {
      const matchingCodes = (resetCode==reset_code) 
  
      switch (step) {
        case "1":
          if (match) {
            return res.status(200).json({ message: "Code accepted", ok: true });
          } else {
            return res.status(400).json({ message: "Code denied" });
          }
        case "2":
          if (match) {
            if (!password){
              return res.status(400).json({ message: "Bad request" });
            }
  
            let updateRes = await user.update({ password, reset_code: null });
            if (updateRes) {
              return res
                .status(200)
                .json({ message: "Password changed successfully", ok: true });
            }
          } else {
            return res.status(400).json({ message: "Bad request" });
          }
        default:
          return res.status(400).json({ message: "Bad request" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  };