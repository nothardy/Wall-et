const { Account } = require('../db')
 
const verifyCVU = async (req, res, next) => {
    try{
        const cvu = req.body;
        const user = await Account.findOne({ where: { cvu: cvu }})

        !user ? res.status(404).json({err: 'cvu not found'}) : next()
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    verifyCVU
};