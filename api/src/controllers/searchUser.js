const { Account, Transaction, Card } = require('../db')

const search = async (mail) => {
    try {
        const user = await Account.findAll({ where: {mail,mail}, include: [{ model: Transaction }, { model: Card }] })
        
        const userData = {
            id: user[0].dataValues.id,
            user_data: {
                fullname: user[0].dataValues.fullname,
                dni: user[0].dataValues.dni,
                ubicacion: user[0].dataValues.ubicacion,
                birth: user[0].dataValues.birth,
            },
            account_data: {
                mail: user[0].dataValues.mail,
                pass: user[0].dataValues.password,
                balance: user[0].dataValues.balance,
                cvu: user[0].dataValues.cvu,
                photo: user[0].dataValues.photo,
                cards: user[0].dataValues.cards,
                transactions: user[0].dataValues.transactions,
                create: user[0].dataValues.createdAt,
            },
        }
    
        if(user) {
            return userData
        }
        //!user ? { err: `User ${mail} not found` } : userData
    }
    catch(err) {
        throw new Error(err)
    }
}

module.exports = search