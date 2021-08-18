const { Account, Transaction, Card, Contact } = require("../db");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
// const {
//   default: Transactions,
// } = require("../../../client/src/Components/Contacts/Transactions");

// const getContactsFromDb = async (req, res, next) => {
//   if (req.url.includes("?email")) {
//     try {
//       const searchedContact = req.query.email;
//       const contacts = await Account.findAll({
//         // chequear de donde la traigo
//         where: {
//           mail: { [Op.iLike]: `%${searchedContact}%` },
//         },
//         include: [
//           {
//             model: Contact,
//             as: "contacts",
//             attributes: ["id", "mail", "cvu"],
//             through: {
//               attributes: [],
//             },
//           },
//         ],
//       });
//       if (contacts.length > 0) return res.json(contacts);
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     try {
//       const contacts = await Account.findAll({
//         include: [
//           {
//             model: Contact,
//             as: "contacts",
//             attributes: ["id", "mail", "cvu"],
//             through: {
//               attributes: [],
//             },
//           },
//         ],
//       });
//       if (contacts.length > 0) return res.json(contacts);
//     } catch (error) {
//       next(error);
//     }
//   }
// };

// const getTransactions = async (id, res, next) => {
//   // const { id } = req.userId;
//   try {
//     console.log("LINEA 52", id);
//     const transactions = await Account.findOne({
//       where: {
//         id: id,
//       },
//       include: [
//         {
//           model: Transaction,
//           as: "transactions",
//         },

//       ],
//     });
//     const obj={

//     }
//     console.log("TRANSACTIONS", transactions.dataValues.transactions);
//     return transactions.dataValues.transactions;
//   } catch (error) {
//     next(error);
//   }
// };

const addContactToDb = async (req, res, next) => {
  try {
    const { fullname, mail, cvu, from } = req.body;
    const contact = await Contact.create({
      id: uuidv4(),
      fullname,
      cvu,
      mail,
    });

    const from_account = await Account.findOne({
      where: { id: from },
    });

    await from_account.addContact(contact);
    res.json({ msg: `Contact successfully added to account` });
  } catch (error) {
    next(error);
  }
};

const getTransactions = async (id) => {
  const user = await Account.findByPk(id, {
    include: [{ model: Transaction }],
  });
  // const transactionsTO = await Transaction.findAll({ where: { to: id } });
  // const transactionsFrom = await Transaction.findAll({
  //   where: { from: id },
  //   include: [{ model: Account }],
  // });

  const listTransactions = await Promise.all(
    user.dataValues.transactions.map(async (el) => {
      const myUser = await Account.findByPk(id);
      const nameTo = await Account.findByPk(el.to);
      const nameFrom = await Account.findByPk(el.from);
      const transactionRealize = await {
        user: myUser.dataValues.mail,
        from: nameFrom.dataValues.mail,
        amount: el.amount,
        to: nameTo.dataValues.mail,
        type_transaction: el.type_transaction,
        state: el.state,
        transaction_date: el.createdAt,
        main: true, // Key en true, significa que son transacciones realizadas por la cuenta
      };
      return transactionRealize;
    })
  );
  return listTransactions;
};
module.exports = { getTransactions, addContactToDb };