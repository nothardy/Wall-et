require('dotenv').config();
const { Account  } = require("../db");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

async function register(req, res, next) {
    const { fullname , password, dni, mail, birth_date } = req.body;
    try {
      if (password.length === 0 || !password ) {throw new Error ("Invalid Password")}
      if (!fullname || !dni ||!mail || !birth_date) {throw new Error ("All fields are required ")};
    if (password.length<8) {throw new Error ("Password it too short, should have 8 characters")};
    const hashedPassword = await bcrypt.hash(password, 12);
    await Account.create({
      id: uuidv4(),
      fullname,
      password: hashedPassword,
      dni,
      mail: mail.toLowerCase(),
      birth_date
    })
    //   .then((recipeCreated) => {
    //     return recipeCreated.addDiets(diets);
    //   })
      .then(newUser => {
        return res.json({
          message: "Created an Account succesfully",
        });
      })
    } catch (error) {next(error)}
}

  module.exports = {
    register
  };