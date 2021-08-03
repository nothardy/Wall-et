require('dotenv').config();
const cookieparser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const { Account } = require('../db');


morgan('dev');
// El orden es importante, el cookieparser debe estar antes de la utilización del session
cookieparser();


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
            const user = await Account.findOne({ where: { mail: mail } });
            if (user && user.password === password) {
                req.session.userId = user.id;
                return res.redirect('/home');
            }
            return res.redirect('/login');
        }
        return res.redirect('/login');
    } catch (error) {
        return res.json({ error: error })
    }
}

function logout (req, res) {
    req.session.destroy(err => {
      if(err) {
        return res.redirect('/home');
      }
      res.clearCookie('sid');
      res.redirect('/');
    })
  }

module.exports = {
    login: login,
    logout: logout
}