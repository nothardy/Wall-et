const { Transaction, Account, transaction_acount } = require("../db");
const { mailTransfer } = require("./mailTransfer");

const TransactionCreator = async (from, to, amount) => {
	try {
		const transfer = await Transaction.create({
			from: from,
			to: to,
			amount: amount,
			type_transaction: "Transfer",
			state: "pending",
		});

		await transfer.addAccounts(from);
		await autentification(transfer);
		return transfer ? true : false;
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

const autentification = async ({ id, from, to, amount }) => {
	try {
		const transaction = await Transaction.findByPk(id);

		const accountFrom = await Account.findByPk(from);
		const accountTo = await Account.findByPk(to);

		transaction.state = "in progress";
		await transaction.save();

		//await Transaction.update({state: 'in progress'}, { where: { id: id } })

		//const balanceFrom = await Account.update({balance: accountFrom.balance - parseInt(amount)}, {where: {id: from}})
		accountFrom.balance = accountFrom.balance - parseInt(amount);
		await accountFrom.save();

		//const balanceTo = await Account.update({ balance: accountTo.balance + parseInt(amount) }, { where: {id: to} })

		accountTo.balance = accoutTo.balance + parseInt(amount);
		await accountTo.save();

		//balanceFrom && balanceTo && await Transaction.update({state: 'done'}, { where: { id: id } }) && await mailTransfer( from, to )

		transaction.state = "done";
		await transaction.save();

		await mailTransfer(from, to);
	} catch (err) {
		console.log(err);
		return err;
	}
};

module.exports = TransactionCreator;
