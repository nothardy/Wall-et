require('dotenv').config();
const { Account  } = require("../db");
const { v4: uuidv4 } = require('uuid');;

function register(req, res, next) {
    const { fullname , password, dni, mail, birth_date } = req.body;
    if (!fullname || !password || !dni ||!mail || !birth_date) return res.send({ error: 500, message: "All fields are required" });
    Account.create({
      id: uuidv4(),
      fullname,
      password,
      dni,
      mail,
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
      .catch((error) => next(error));
  }

  module.exports = {
    register
  };