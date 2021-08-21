require('dotenv').config();
const {  Account} = require("../db");
const {  v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const {  MAIL_ACCOUNT,  MAIL_PASSWORD,  FRONT_HOST} = process.env;
const jwt = require("jsonwebtoken");

async function register(req, res, next) {
  const {
    fullname,
    password,
    dni,
    mail,
    birth_date
  } = req.body;
  try {
      const user = await Account.findOne({
      where: {
        mail: mail
      }
    });
 
    if (user !== null) {
      throw new Error("Account exist")
    }

    if (password.length === 0 || !password) {
      throw new Error("Invalid Password")
    }
    if (!fullname || !dni || !mail || !birth_date) {
      throw new Error("All fields are required ")
    };
    if (password.length < 8) {
      throw new Error("Password is too short, should have 8 characters")
    };
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/gm.test(password)) {
      throw new Error("Password must contain an uppercase letter, a lowercase and a number.")
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await Account.create({
      id: uuidv4(),
      fullname,
      password: hashedPassword,
      dni,
      mail: mail.toLowerCase(),
      birth_date,
      cvu: generatorCVU(),
      photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    })
    //

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: MAIL_ACCOUNT,
        pass: MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
    })

    await transporter.verify().then(() => console.log("ready to send email"))

    const token = await jwt.sign({
      id: newUser.id
    }, "mysecretkey", {
      expiresIn: 60 * 60 * 24, // 10min
    });

    await transporter.sendMail({
      from: MAIL_ACCOUNT,
      to: mail,
      subject: "Verify your new Account in Wall-et",
      html: `<p> Hi ${newUser.fullname}. In order to verify your new Account, please </p>
      <a href="${FRONT_HOST}confirmMail/${token}"> Click here </a>. 
      <p>If you did not request a new account, please ignore this mail. </p>`,
    });
      await newUser.save()
    
    const response = await newUser;
    return res.json({
      message: "Created an Account succesfully",
    });
  } catch (error) {
    res.status(400).json({
      msg: error
    })
  }
}

function generatorCVU() {
  var cuenta = () => "111" + ("00000000" + (Math.random() * 99999999 | 0)).slice(-10);
  var C = cuenta()
  var verificador2 =
    C[0] * 3 +
    C[1] * 9 +
    C[2] * 7 +
    C[3] * 1 +
    C[4] * 3 +
    C[5] * 9 +
    C[6] * 7 +
    C[7] * 1 +
    C[8] * 3 +
    C[9] * 9 +
    C[10] * 7 +
    C[11] * 1 +
    C[12] * 3;
  verificador2 = (10 - verificador2 % 10) % 10;
  return "000" + "0047" + "4" + C + verificador2;
}

const confirm = async (req, res) => {
  try {
    const { token } = req.params;

    const data = jwt.verify(token, "mysecretkey");

    if (data === null) {
      return res.json({
        success: false,
        msj: 'Error data'
      })
    }


    const user = await Account.findByPk(data.id);
    user.activated = true;
    await user.save()
    return res.status(200)

  } catch (error) {
    res.status(400).json({
      msg: error
    })
  }
}


module.exports = {
  register,
  confirm

};