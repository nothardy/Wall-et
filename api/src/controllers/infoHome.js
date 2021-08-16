const {
  Account,
  Card,
  Transaction,
  Contact,
  transaction_acount,
  account_contact,
} = require("../db");

const infoUser = async (id) => {

    
    try {
        const user = await Account.findByPk( id , {include: [{model: Transaction}, {model: Card},{ model: Contact }]} )
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
              contacts: user.dataValues.contacts.map((el) => {
          return {
            id: el.id,
            fullname: el.fullname,
            mail: el.mail,
            cvu: el.cvu,
            contact_date: el.createdAt,
          };
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
    const datos = await Account.find({
      where: { fullname: name },
      include: [{ model: Transaction }],
    });

    datos.length >= 0 && { transactions: datos[0].dataValues.transactions };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  infoUser,
  /* infoAdmin, */
  transac,
};

/* FROM CONTACS 
const { Account, Card, Transaction, Contact, transaction_acount, account_contact } = require('../db');

const infoUser = async (id) => {

    try {
        const user = await Account.findByPk( id , {include: [{model: Transaction}, {model: Card}, {model: Contact}]} )
        const transactionsTO = await Transaction.findAll({ where: { to: id }})
        const listTransactions = [...await Promise.all(user.dataValues.transactions.map(async el => {
            const nameTo = await Account.findByPk(el.to)
            const transactionRealize = await {
                id: el.id,
                from: el.from,
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
        })), ]
        
        const data = await {
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
                transactions: listTransactions,
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
        throw new Error(err)
    }
}
*/
