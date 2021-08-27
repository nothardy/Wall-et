const { Account, Card } = require("../db");

module.exports = {
	verifyCard: async (req, res, next) => {
		try {
			const {
				account_id,
				/* userCard_num, userCard_cvc, userCard_expired, */ card_name,
				card_num,
				cvc,
				card_expiration_data,
				main,
			} = req.body;

			if (
				!account_id ||
				/* !userCard_num || !userCard_cvc || !userCard_expired || */ !card_num ||
				!cvc ||
				!card_expiration_data
			) {
				res.status(404);
				throw new Error("Data is not found");
			}

			if (main) {
				const { cards } = await Account.findByPk(account_id, {
					include: { model: Card },
				});
				const card = cards.filter((el) => el.card_num === card_num);

				if (card.length === 1) {
					if (card_name === card[0].card_name) {
						if (
							card_expiration_data ===
								card[0].card_expiration_data &&
							cvc === card[0].card_security_num
						)
							next();
						else {
							res.status(404);
							throw new Error(
								"Data invalid in Valid thru or CVC"
							);
						}
					} else {
						res.status(404);
						throw new Error("Name card is invalid");
					}
				} else {
					res.status(404);
					throw new Error("Number card not register in wall-et");
				}
			}

			if (!main) next();
		} catch (err) {
			res.status(404);
			console.error(err);
			next(err);
		}
	},

	cardExist: async ( req, res, next ) => {
		const { id, card_num } = req.body;

		try {
			if( !id || !card_num ) {
				throw new Error('Data is not found')
			}

			const { cards } = await Account.findByPk(id, {
				include: { model: Card },
			});

			const card = cards.filter(el => el.card_num === card_num);
			if (card.length >= 1){
				throw new Error(' Card exist in account ');
			}

			next()


		}
		catch(err){
			console.error(err)
			next(err)
		}
	}
};
