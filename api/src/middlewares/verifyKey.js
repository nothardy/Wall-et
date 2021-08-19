const { Account } = require('../db');

module.exports = {
    verifyKey: async (req, res, next) => {
        try {
            const { from, key } = req.body
            
            const user = await Account.findByPk(from)
            const dni = user.dataValues.dni
            
    
            if(!key || !dni){
                throw new Error('Data not found')
                res.status(404)
            }
            if(key !== dni) {
                throw new Error('Key invalid')
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