const { Account } = require('../db');

const HashTable = async (id) => {
    try {
        const user = await Account.findByPk(id)
        const numBuckets = 50;
    
        const metods = {
            hash : key => {
                let sumKey = 0;
                key.split(/\s*\s*/).map( el => sumKey += el.charCodeAt())
                return sumKey % numBuckets;
            }
        }

        const nameHash = metods.hash(user.dataValues.fullname.replace(' ', ''))
        const mailHash = metods.hash(user.dataValues.mail.replace(' ', ''))
        const DNIHash = metods.hash(user.dataValues.dni.replace(' ', ''))
    
        const code = `N${mailHash}${nameHash}${Math.floor((parseInt(mailHash) + parseInt(nameHash) * parseInt(DNIHash)) * Math.random())}${user.dataValues.dni[user.dataValues.dni.length-2]}${user.dataValues.dni[user.dataValues.dni.length-1]}${Math.floor((parseInt(mailHash) + parseInt(nameHash)) * Math.random())}`


        return code 
    }
    catch(err){
        console.error(err)
        return err
    }
} 

module.exports = HashTable