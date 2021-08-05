const jwt = require('jsonwebtoken');

// ESTO ES PARA QUE SE USE ANTES DE CADA RUTA, QUE VERIFIQUE SI HAY UN TOKEN ACTIVO
// Y SOLO LANCE LA INFO SI HAY UN TOKEN ACTIVO
// SE ESCRIBE EN CADA RUTA EN LA QUE SOLO PUEDEN ACCEDER LOS USUARIOS LOGEADOS. EJEMPLO:
// server.get("/home", verifyToken, controller)

const verifyToken = async (req, res, next) => {
    try {
        //get the token from the headers:
        const token = req.headers['x-access-token'];
        // if doesn't exists a token
        if (!token) return res.status(401).send({ auth: false, message: "no Token aws Provided" });
        // decode the token
        const decoded = await jwt.verify(token, "mysecretkey");
        // save the user id
        req.userId = decoded.id
        // continue with the next function
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    verifyToken
}