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
		accountTo.balance = accountTo.balance + parseInt(amount);
		transaction.state = "done";

		await accountFrom.save();
		await accountTo.save();
		await transaction.save();
		//const balanceTo = await Account.update({ balance: accountTo.balance + parseInt(amount) }, { where: {id: to} })

		console.log("estoy aca 1");
		//balanceFrom && balanceTo && await Transaction.update({state: 'done'}, { where: { id: id } }) && await mailTransfer( from, to )

		console.log("estoy aca 2");

		await mailTransfer(from, to);
	} catch (err) {
		console.log(err);
		return err;
	}
};

module.exports = TransactionCreator;
