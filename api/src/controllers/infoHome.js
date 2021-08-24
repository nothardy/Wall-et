const { Account, Card, Transaction, Contact, Charge, transaction_acount, account_contact } = require('../db');

const infoUser = async (id) => {

    try {
        const user = await Account.findByPk( id , {include: [{model: Transaction}, {model: Card}, {model: Contact}, {model: Charge}]} )
        const transactionsTO = await Transaction.findAll({ where: { to: id }})
        const listTransactions = [...await Promise.all(user.dataValues.transactions.map(async el => {
            const nameTo = await Account.findByPk(el.to)
            const transactionRealize = {
                id: el.id,
                from:  el.from,
                amount: el.amount,
                to: nameTo.dataValues.fullname,
                type_transaction: el.type_transaction,
                state: el.state,
                transaction_date: el.createdAt,
                main: true, // Key en true, significa que son transacciones realizadas por la cuenta
            }
            return transactionRealize;
        

        })), ...await Promise.all(transactionsTO.map( async el => {
                const nameFrom = await Account.findByPk(el.from);
                const transactionReceives = {
                    id: el.id,
                    from: nameFrom.dataValues.fullname,
                    amount: el.amount,
                    to: el.to,
                    type_transaction: el.type_transaction,
                    state: el.state,
                    transaction_date: el.createdAt,
                    main: false, // Key en false, significa que son transacciones que recibe la cuenta
                }
                return transactionReceives;
        })), ...await Promise.all(user.dataValues.charges.map( async el => {
            const remplace = el.card_num.split('').splice(0, el.card_num.split('').length-4).map(el => el.replace(/[0-9]/, '*')).join('')
        
            const transactionReceives = {
                id: el.id,
                from: `${el.from}(${el.card_num.split('').splice([-4]).join('')})`,
                amount: el.amount,
                to: el.to,
                type_transaction: el.type_transaction,
                state: el.state,
                transaction_date: el.createdAt,
                main: false, // Key en false, significa que son transacciones que recibe la cuenta
            }
            return transactionReceives;
    }))
    ]
        
        const data = {
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
                transactions: listTransactions.sort( (a, b) => a.transaction_date < b.transaction_date? 1 : -1 || 0),
                contacts: user.dataValues.contacts.map(el => {return {
                    id: el.id,
                    fullname: el.fullname,
                    mail: el.mail,
                    cvu: el.cvu,
                    contact_date: el.createdAt,
                }}),
                create: user.dataValues.createdAt,
            },
    
        }
        
        return data
    }

    catch (err) {
        console.log(err)
        throw new Error(err)
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
    transac
}