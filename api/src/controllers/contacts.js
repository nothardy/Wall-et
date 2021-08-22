const { Account, Transaction, Card, Contact } = require("../db");
const { v4: uuidv4 } = require("uuid");

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
