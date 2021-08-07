const jwt = require("jsonwebtoken");
const { Account, Transaction, Card } = require("../db");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { mail, password } = req.body
    const user = await Account.findOne({ where: { mail: mail }, include: [{model: Transaction}, {model: Card}] });
    //if the user doesn't exists
    if (!user) {
      return res.status(404).send("The mail doesn't exists");
    };
    //if the password is wrong
    if (!password===user.password) {
      return res.status(401).send({ auth: false, token: null });
    };
    //if the data is correct
    //generating the token
    const token = jwt.sign({ id: user.id }, "mysecretkey", {
      expiresIn: 60 * 60 * 24, // 60*60*24s = 1day 
    });
    const toShow = {
      id: user.dataValues.id,
      user_data: {
          fullname: user.dataValues.fullname,
          dni: user.dataValues.dni,
          ubicacion: user.dataValues.ubicacion,
          birth: user.dataValues.birth,
      },
      account_data: {
          mail: user.dataValues.mail,
          pass: user.dataValues.password,
          balance: user.dataValues.balance,
          cvu: user.dataValues.cvu,
          photo: user.dataValues.photo,
          cards: user.dataValues.cards,
          transactions: user.dataValues.transactions.map(el => {return {
              id: el.id,
              from: el.from,
              to: el.to,
              type_transaction: el.type_transaction,
              state: el.state,
              transaction_date: el.createdAt,
          }
      }),
          create: user.dataValues.createdAt,
      },
  }
    res.status(200).json({
      user: toShow,
      auth: true,
      token: token,
    });
  } catch (error) {
    console.log(error)
  }
};

const logout = (req, res) => {
  res.status(200).send({auth: false, token: null });
};

module.exports = {
  login,
  logout,
}