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
    
    const varHash = metods.hash(user.dataValues.fullname) === NaN ? metods.hash(user.dataValues.mail) : metods.hash(user.dataValues.fullname)

    return `${Math.floor(parseInt(metods.hash(user.dataValues.fullname) * Math.random()))}N${varHash}D${user.dataValues.dni[user.dataValues.dni.length-2]}${user.dataValues.dni[user.dataValues.dni.length-1]}${Math.floor(parseInt(metods.hash(user.dataValues.mail) * Math.random()))}`
} 

module.exports = HashTable