require('dotenv').config();
const session = require('express-session');
const { User } = require('../db');

session({
    name: 'sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {}
})

async function login (req, res) {
    const { mail, password } = req.body;
    try {
        if (mail && password) {
            const user = await User.findOne({ where: { mail: mail } });
            if (user && user.password === password) {
                req.session.userId = user.id;
                return res.redirect('/home');
            }
            return res.json({ error: "The username or password is incorrect" });
        }
        return res.json({ error: "The username or password is incorrect" });
    } catch (error) {
        return res.json({ error: error })
    }
}

function logout (req, res) {
    req.session.destroy(err => {
      if(err) {
        return res.redirect('/home');
      }
      res.redirect('/');
    })
}

module.exports = {
    login: login,
    logout: logout
}