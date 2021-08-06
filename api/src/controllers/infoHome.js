const { Account, Card, Transaction, transaction_acount } = require('../db');

const infoUser = async (mail) => {
    
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
        throw new Error(err)
    }
}

const infoAdmin = async (mail) => {

    try {
        const info = await Account.findAll({ where: [{admin: true}, { mail: mail }] });
        return {
            name: info[0].dataValues.fullname,
        }}
    catch (err) {
        throw new Error(err);
    }
}

const transac = async (name) => {
    try { 
        const datos = await Account.find({ where: { fullname: name }, include: [ { model: Transaction } ]});

        datos.length >= 0 && {transactions: datos[0].dataValues.transactions};   
    }
    catch (err){
        throw new Error(err);
    }
}

module.exports = {
    infoUser,
    infoAdmin,
    transac
}