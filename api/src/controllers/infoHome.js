const { Account, Card, Transaction, transaction_acount } = require('../db');

const infoUser = async () => {
    const mail = 'Wal@gmail.com'
    try {
        const user = await Account.findAll({ where: { mail: mail }, include: [{model: Transaction}, {model: Card}] })

        return {
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

    }

    catch (err) {
        return {err: err}
    }
}

const infoAdmin = async () => {

    try {
        const fullAccounts = await Account.findAll({ where: { admin: false }, include: [{model: Transaction}, {model: Card}] })
        console.log(fullAccounts)
        const squemaAccounts = fullAccounts.map(user => {
            return {
                id: user.id,
                user_data: {
                    fullname: user.dataValues.fullname,
                    dni: user.dataValues.dni,
                    ubicacion: user.dataValues.ubicacion,
                    birth: user.dataValues.birth,
                },
                account_data: {
                    mail: user.dataValues.mail,
                    pass: user.dataValues.password,
                    balance: user.dataValues.balance,
                    cvu: user.dataValues.cvu,
                    photo: user.dataValues.photo,
                    cards: user.dataValues.cards,
                    transactions: user.dataValues.transactions,
                    create: user.createdAt,
                },
            }
        })

        return squemaAccounts
    }

    catch (err) {
        return {err : err}
    }
}

module.exports = {
    infoUser,
    infoAdmin
}