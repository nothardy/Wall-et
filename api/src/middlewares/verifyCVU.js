const { Account } = require('../db')
 
const verify = async (req, res, next) => {
    try{
        const data = req.body.data.replace(' ', '');
        const cvuAccount = req.body.cvuAccount.replace(' ', '');
        const mailAccount = req.body.mailAccount.replace(' ', '');
        console.log(data, cvuAccount, mailAccount)
        if(data === cvuAccount || data === mailAccount) { 
            res.status(404) 
            throw new Error('Error')
        }
        
        let user;  
        data.includes('@') ? user = await Account.findOne({ where: { mail: data }}) : user = await Account.findOne({ where: { cvu: data }})
        
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
    verify
};