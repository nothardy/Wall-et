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

    return `WALL-ET-726N${metods.hash(user.dataValues.fullname)}D${user.dataValues.dni[user.dataValues.dni.length-2]}${user.dataValues.dni[user.dataValues.dni.length-1]}`
} 

module.exports = HashTable