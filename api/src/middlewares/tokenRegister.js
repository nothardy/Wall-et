const jwt = require('jsonwebtoken');

//token verificacion registro mail

const getTokenRegister =  (payload) => {
    return jwt.sign({
        data: payload
    }, 'SECRET', {expiresIn: '1h'});
}

const getTokenData = (token) =>{
    let data = nul;
    jwt.verify(token, 'SECRET', (err, decoded) => {
        if (err){
            console.log('Error data token')
        } else{
            data = decoded
        }
    })
    return data;
}

module.exports = {
    getTokenRegister,
    getTokenData
}