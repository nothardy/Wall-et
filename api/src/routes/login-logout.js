require('dotenv').config();
const router = require('express').Router();

const cookieparser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const { Account } = require('../db');

router.use(morgan('dev'));
// El orden es importante, el cookieparser debe estar antes de la utilización del session
router.use(cookieparser());
router.use(session(
    {
      name: 'sid',
      secret:'secret',
      resave:false,
      saveUninitialized:false,
      cookie:{}
    }
));

//----------------------

router.post('/login', async function login(req, res) {
    const { mail, password } = req.body;
    const user = await Account.findOne({ where: { mail: mail } });
    if(!user) return res.status(404).json({msg: "404"})
    if(user.password === password) {
        req.session.userId = user.id;
        return res.status(200).json({msg: "connected"});
    }
    return res.status(400).json({msg: "invalidCredentials"});
});

router.post('logout', function logout(req, res) {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/home');
        }
        res.clearCookie('sid');
        res.redirect('/');
    })
})

router.post('/register', async (req, res) => {
    const { mail, password } = req.body;
    const user = {
        mail,
        password
    }
    const newUser = await Account.create(user);
    return res.send(newUser);

});


module.exports = router;