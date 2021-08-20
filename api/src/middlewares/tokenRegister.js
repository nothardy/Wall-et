const jwt = require('jsonwebtoken');

//token verificacion registro mail

const getTokenRegister =  (payload) => {
    return jwt.sign({
        data: payload
    }, 'mysecretkey', {expiresIn: '1h'});
}

const getTokenData = (token) =>{
    let data = null;

    jwt.verify(token, 'mysecretkey', (err, decoded) => {
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