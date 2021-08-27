const { Account } = require('../db');
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { MAIL_ACCOUNT, MAIL_PASSWORD, FRONT_HOST } = process.env;

module.exports = {
    mailTransfer: async ( idFrom, idTo ) => {
        try {
          const accountFrom = await Account.findByPk(idFrom)
          const accountTo = await Account.findByPk(idTo)

           
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
              user: MAIL_ACCOUNT,
              pass: MAIL_PASSWORD,
            },
            tls: {rejectUnauthorized: false},
          })

          const mailOptionsFrom = {
            from: MAIL_ACCOUNT, // sender address
            to: accountFrom.mail, // receiver adress
            subject: "Transfer", //Subject mail
            html: `<p> Hi ${accountFrom.fullname}. You transaction to ${accountTo.fullname} was successful </p>
                    <a href="${FRONT_HOST}mywallet"> Click here </a>.`,
          }

          const mailOptionsTo = {
            from: MAIL_ACCOUNT, // sender address
            to: accountTo.mail, // receiver adress
            subject: "Transfer", //Subject mail
            html: `<p> Hi ${accountTo.fullname}. You receibed transaction to ${accountFrom.fullname} </p>
                    <a href="${FRONT_HOST}mywallet"> Click here </a>.`,
          }
          
          return transporter.sendMail(mailOptionsFrom) && transporter.sendMail(mailOptionsTo);
        }          
        
        catch(err){
          console.error(err)
          throw new Error(err)
      }
    },

    mailCardTransfer: async ( from, to, card_num ) => {
      try {
        const accountTo = await Account.findByPk(to)

        const transporter = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          auth: {
            user: MAIL_ACCOUNT,
            pass: MAIL_PASSWORD,
          },
          tls: {rejectUnauthorized: false},
        })

        const mailOptionsTo = {
          from: MAIL_ACCOUNT, // sender address
          to: accountTo.mail, // receiver adress
          subject: "Transfer", //Subject mail
          html: `<p> Hi ${accountTo.fullname}. Your account receibed  ${from} ${card_num.split("").splice(0, card_num.split("").length - 4).map((el) => el.replace(/[0-9]/, "*")).join("")}${card_num.split("").splice([-4]).join("")}</p>
            <a href="${FRONT_HOST}mywallet"> Click here </a>.`,
      }

      return transporter.sendMail(mailOptionsTo)
    }
    catch(err){
      console.error(err)
      throw new Error(err)
    }
    },

    mailCashCode: async ( code, to ) => {
      try {
        const accountTo = await Account.findByPk(to)

        const transporter = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          auth: {
            user: MAIL_ACCOUNT,
            pass: MAIL_PASSWORD,
          },
          tls: {rejectUnauthorized: false},
        })

        const mailOptionsTo = {
          from: MAIL_ACCOUNT, // sender address
          to: accountTo.mail, // receiver adress
          subject: "Code", //Subject mail
          html: `<p> Hi ${accountTo.fullname}. Your code is ${code} </p>`,
      }

      return transporter.sendMail(mailOptionsTo)
    }
    catch(err){
      console.error(err)
      throw new Error(err)
    }
    }
}