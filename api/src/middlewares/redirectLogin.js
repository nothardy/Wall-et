const jsw = require('jsonwebtoken');

const redirectLogin = async (req, res, next) => {
    req.userId ? res.redirect('/login') : next()
}

module.exports = redirectLogin