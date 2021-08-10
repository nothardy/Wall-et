const { Account, Card, Transaction, transaction_acount } = require('../db');

const infoUser = async (id) => {
    
    try {
        const user = await Account.findByPk( id , {include: [{model: Transaction}, {model: Card}]} )
        return {
            id: user.dataValues.id,
            user_data: {
                fullname: user.dataValues.fullname,
                dni: user.dataValues.dni,
                ubicacion: user.dataValues.ubication,
                birth: user.dataValues.birth_date,
            },
            account_data: {
                admin: user.dataValues.admin,
                mail: user.dataValues.mail,
                pass: user.dataValues.password,
                balance: user.dataValues.balance,
                cvu: user.dataValues.cvu,
                photo: user.dataValues.photo,
                cards: user.dataValues.cards,
                transactions: user.dataValues.transactions.map(el => {return {
                        id: el.id,
                        from: el.from,
                        amount: el.amount,
                        to: el.to,
                        type_transaction: el.type_transaction,
                        state: el.state,
                        transaction_date: el.createdAt,
                    }
                }),
                
                create: user.dataValues.createdAt,
            },
        }

    }

    catch (err) {
        throw new Error(err)
    }
}

/* const infoAdmin = async (id) => {

    try {
        const info = await Account.findAll({ where: [{admin: true}, { mail: mail }] });
        return {
            id: info[0].dataValues.id,
                user_data: {
                    fullname: info[0].dataValues.fullname,
                    dni: info[0].dataValues.dni,
                    ubicacion: info[0].dataValues.ubicacion,
                    birth: info[0].dataValues.birth,
                },
                account_data: {
                    admin: info[0].dataValues.admin,
                    mail: info[0].dataValues.mail,
                    pass: info[0].dataValues.password,
                    balance: info[0].dataValues.balance,
                    cvu: info[0].dataValues.cvu,
                    photo: info[0].dataValues.photo,
                    cards: info[0].dataValues.cards,
                    transactions: info[0].dataValues.transactions,
                    create: info[0].createdAt,
            }
        }
    }

    catch (err) {
        throw new Error(err);
    }
} */

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
    /* infoAdmin, */
    transac
}