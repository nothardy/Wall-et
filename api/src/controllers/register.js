require('dotenv').config();
const { User, Account  } = require("../db");
const { v4: uuidv4 } = require('uuid');;

function register(req, res, next) {
    const { fullname , password, dni, mail, birth_data } = req.body;
    if (!fullname || !password || !dni ||!mail || !birth_data) return res.send({ error: 500, message: "All fields are required" });
    User.create({
      id: uuidv4(),
      fullname,
      password,
      dni,
      mail,
      birth_data
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