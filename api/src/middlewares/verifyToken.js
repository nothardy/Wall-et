const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next)=> {
    //get the token from the headers:
    const token = req.headers['x-access-token'];
    // if doesn't exists a token
    if(!token) return res.status(401).send({auth: false, message: "no Token aws Provided"});
    // decode the token
    const decoded = await jwt.verify(token, "mysecretkey");
     // save the token on request object to using on routes
    req.userId = decoded.id
    // continue with the next function
    next()
}

module.exports = {
    verifyToken
}