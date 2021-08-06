const jwt = require("jsonwebtoken");
const {Account} = require("../db");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try{
    const {mail , password} = req.body
    const user = await Account.findOne({ where: { mail: mail } });
    //if the user doesn't exists
    if (!user) {
      return res.status(404).send("The mail doesn't exists");
    };
    //reemplazar esto cuando se unan todas las ramas
    //if the password is wrong
    if(!bcrypt.compareSync(password, user.password)) {
      return res.status(401).send({ auth: false, token: null });
    };
    //if the data is correct
    //generating the token
    const token = jwt.sign({ id: user.id }, "mysecretkey", {
      expiresIn: 60 * 60 * 24, // 60*60*24s = 1day 
    });
    res.status(200).json({ 
      ...user,
      auth: true,
      token: token,
    });
  }catch{}
};

const logout = (req, res) => {
    res.status(200).send({auth: false, token: null});
};

module.exports= {
    login,
    logout
}