const jwt = require("jsonwebtoken");
const {Account} = require("../db");
const bcrypt = require("bcrypt");

// https://programmerclick.com/article/89671544092/

const login = async (req, res) => {
    const {mail , password} = req.body
    const user = await Account.findOne({where: { mail: mail }});
    //if the user doesn't exists
    if (!user) {
      return res.status(404).send("The mail doesn't exists");
    };
    //bcrypt.compareSync(password, user.password)
    if(!password==user.password) {
      return res.status(401).send({ auth: false, token: null });
    };
    const token = jwt.sign({ id: user.id }, "mysecretkey", {
      expiresIn: 60 * 60 * 24, // 60*60*24s = 1day 
    });
    res.status(200).json({ 
      auth: true,
      id: user.id,
      name: user.name,
      mail: user.mail,
      isAdmin: user.admin,
      token: token,
    });
  };

const logout = async (req, res) => {
    res.status(200).send({auth: false, token: null});
};

module.exports= {
    login,
    logout
}