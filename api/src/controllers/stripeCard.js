const Stripe = require("stripe");
const { Charge, Account, account_charge } = require("../db");
const { nameCard } = require("./cardsName.js");
const { SECRET_KEY } = process.env;

//const stripe = new Stripe(SECRET_KEY);

module.exports = {
	checkout: async (/* id, */ card_num, account_id, amount, main) => {
		try {
			const name = await nameCard(card_num.split(""));
			const accountTo = await Account.findByPk(account_id);
			if (main) {
				const transfer = await Charge.create({
					from: name,
					to: account_id,
					card_num,
					amount: amount,
					type_transaction: "Transfer",
					state: "in progress",
				});

				await transfer.addAccounts(account_id);

				transfer &&
					(await Account.update(
						{ balance: accountTo.balance + amount },
						{ where: { id: account_id } }
					)) &&
					(await Charge.update(
						{ state: "done" },
						{ where: { id: transfer.id } }
					));

				return transfer;
			}

			/* if(!main){
                const payment = await stripe.paymentIntents.create({
                amount, 
                currency: "USD",
                payment_method: id,
                confirm: true,
            });

            const transfer = await Charge.create({
                from: 'Card',
                to: account_id,
                amount: amount,
                type_transaction: 'Transfer',
                state: 'in progress',
            })
            
            await transfer.addAccounts(accountId)

            transfer && await Account.update({balance: accountTo.balance + parseInt(amount)}, {where: {id: accountId}}) && await Charge.update({state: 'done'}, { where: { id: transfer.id } })
            
            return transfer
        } */

			/* await Account.update({balance: accountTo.balance + parseInt(amount)}, {where: {id: accountId}}) */
		} catch (err) {
			console.log("acaaaa", err);
			throw new Error(err);
		}
	},
};
