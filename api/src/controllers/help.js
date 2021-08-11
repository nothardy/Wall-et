require('dotenv').config();
const { Account } = require("../db");
const nodemailer = require("nodemailer");
const { MAIL_ACCOUNT, MAIL_PASSWORD } = process.env;
// npm install nodemailer

const help = async (req, res) => {
    const { mail, mailSubject, mailBody } = req.body;
    try {
        const user = await Account.findOne({ where: { mail: mail } })

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

        await transporter.sendMail({
            from: `CONSULTATION FOR CUSTOMER HELP SERVICE <${MAIL_ACCOUNT}>`, // sender address
            to: MAIL_ACCOUNT, // receiver adress
            subject: mailSubject, //Subject mail
            text: `Mail del usuario: ${mailBody} 
            Datos del usuario: 
            * Name: ${user.fullname}
            * DNI: ${user.dni}
            * Ubication: ${user.ubication}
            * Birth date: ${user.birth_date}
            * CVU: ${user.cvu}`,
        });

        return res.status(200).json({msg: "mail sent"})
    }catch(error){
        res.status(400).json({msg: error})
    }
};

module.exports={
    help,
}