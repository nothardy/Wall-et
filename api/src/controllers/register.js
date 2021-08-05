require('dotenv').config();
const { Account } = require("../db");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

async function register(req, res, next) {
  const { fullname, password, dni, mail, birth_date } = req.body;
  try {
    if (password.length === 0 || !password) { throw new Error("Invalid Password") }
    if (!fullname || !dni || !mail || !birth_date) { throw new Error("All fields are required ") };
    if (password.length < 8) { throw new Error("Password is too short, should have 8 characters") };
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/gm.test(password)) { throw new Error("Password must contain an uppercase letter, a lowercase and a number.") }
    const hashedPassword = await bcrypt.hash(password, 12);
    await Account.create({
      id: uuidv4(),
      fullname,
      password: hashedPassword,
      dni,
      mail: mail.toLowerCase(),
      birth_date,
      cvu: generatorCVU()
    })
      //   .then((recipeCreated) => {
      //     return recipeCreated.addDiets(diets);
      //   })
      .then(newUser => {
        return res.json({
          message: "Created an Account succesfully",
        });
      })
  } catch (error) { next(error) }
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

module.exports = {
  register
};