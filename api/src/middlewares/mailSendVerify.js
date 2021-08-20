const nodemailer = require("nodemailer");

const { MAIL_ACCOUNT, MAIL_PASSWORD, FRONT_HOST } = process.env;

const mail = {
    user: MAIL_ACCOUNT,
    pass: MAIL_PASSWORD,
}


const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: MAIL_ACCOUNT,
        pass: MAIL_PASSWORD,
    },
        tls: {rejectUnauthorized: false},
    })

    const sendMailConfirmation = async (mail, subject, html) =>{
        // const { mail } = req.body;
        try{
            await transporter.sendMail({
                from: MAIL_ACCOUNT, // sender address
                to: mail, // receiver adress
                subject: "Verify your new Account in Wall-et", //Subject mail
                html: `<p> Hi ${user.fullname}. In order to reset your password, please </p>
                <a href="${FRONT_HOST}/${token}"> Click here </a>. 
                <p>If you did not request a new password, please ignore this mail. </p>`,
            });
            return res.status(200).json({msg: "mail sent"})
    }catch(error){
      return   res.status(400).json({msg: error})
    }
    }

    module.exports={
        sendMailConfirmation
    }

