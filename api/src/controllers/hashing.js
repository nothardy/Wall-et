const { Account } = require('../db')

const HashTable = async (id) => {
    const user = await Account.findByPk(id)
    const numBuckets = 50;
    
    const metods = {
        hash : key => {
            let sumKey = 0;
            key.split(/\s*\s*/).map( el => sumKey += el.charCodeAt())
            return sumKey % numBuckets;
        }
    }
<<<<<<< HEAD
    
    const varHash = metods.hash(user.dataValues.fullname) === NaN ? metods.hash(user.dataValues.mail) : metods.hash(user.dataValues.fullname)

    return `${Math.floor(parseInt(metods.hash(user.dataValues.fullname) * Math.random()))}N${varHash}D${user.dataValues.dni[user.dataValues.dni.length-2]}${user.dataValues.dni[user.dataValues.dni.length-1]}${Math.floor(parseInt(metods.hash(user.dataValues.mail) * Math.random()))}`
=======

    const nameHash = metods.hash(user.dataValues.fullname.replace(' ', ''))
    const mailHash = metods.hash(user.dataValues.mail.replace(' ', ''))
    const DNIHash = metods.hash(user.dataValues.dni.replace(' ', ''))
    
    
    return `N${mailHash}${nameHash}${Math.floor((parseInt(mailHash) + parseInt(nameHash) * parseInt(DNIHash)) * Math.random())}${user.dataValues.dni[user.dataValues.dni.length-2]}${user.dataValues.dni[user.dataValues.dni.length-1]}${Math.floor((parseInt(mailHash) + parseInt(nameHash)) * Math.random())}`
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
} 

module.exports = HashTable