const { Account } = require('../db');
const bcrypt = require("bcrypt");

module.exports = {
    verifyKey: async (req, res, next) => {
        try {
            const { from, key } = req.body
            
            const user = await Account.findByPk(from)
            const password = user.dataValues.password
           
    
            if(!key || !password){
                throw new Error('Data not found')
                res.status(404)
            }
            if(!bcrypt.compareSync(key, password)) {
                throw new Error('Password invalid')
                res.status(404)
            }

            next()
        }
        catch(err){
            console.error(err)
            next(err)
        }

    } 
}