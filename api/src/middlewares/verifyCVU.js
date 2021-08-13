const { Account } = require('../db')
 
const verifyCVU = async (req, res, next) => {
    try{
        const cvu = req.body.cvu;
        const user = await Account.findOne({ where: { cvu: cvu }})

        if(!user || user.length < 1) {
            res.status(404)
            throw new Error('cvu not found')  
        }
        next()
    }
    catch(err){
        console.log(err)
        res.status(404).json(err)
        return
    }
}

module.exports = {
    verifyCVU
};