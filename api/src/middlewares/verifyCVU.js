const { Account } = require('../db')
 
<<<<<<< HEAD
const verifyCVU = async (req, res, next) => {
    try{
        const cvu = req.body.cvu;
        const user = await Account.findOne({ where: { cvu: cvu }})

=======
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
        
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
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
<<<<<<< HEAD
    verifyCVU
=======
    verify
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
};