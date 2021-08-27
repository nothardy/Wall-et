const { Account, Transaction, Card, Contact, Favorite } = require("../db");
const { Op, UUID } = require("sequelize");
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
    try {
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
        cvu: nameTo.dataValues.cvu,
          photo: nameTo.dataValues.photo,
				main: true,
				// Key en true, significa que son transacciones realizadas por la cuenta
			};
			return transactionRealize;
		})
	);
	return listTransactions;
    }catch(error){
      console.error(error)
    return error
    }
};

const postFavorite = async (req, res, next) => {
	const favoriteToAdd = req.body;
	const id = req.userId;
	const account = await Account.findByPk(id, {
		include: { model: Favorite },
	});
	let isAlreadyAFavorite = account.dataValues.favorites.find(
		(el) => el.mail === favoriteToAdd.mail
	);

	if (isAlreadyAFavorite && isAlreadyAFavorite.length > 0)
		res.sendStatus(400);
	try {
		await Favorite.create({
			id: uuidv4(),
			user: favoriteToAdd.fullname,
			mail: favoriteToAdd.mail,
			date_transaction: favoriteToAdd.date_transaction,
			accountId: id,
		});

		res.json({ msg: `Favorite successfully added to account` });
	} catch (error) {
		next(error);
	}
};

const getFavorites = async (req, res, next) => {
	const id = req.userId;
	try {
		const user = await Account.findByPk(id, {
			include: [{ model: Favorite }],
		});

		const data = {
			favorites: user.dataValues.favorites,
		};
		console.log(data.favorites);
		res.json(data);
	} catch (error) {
		next(error);
	}
};

// const deleteFavorite = async (req, res, next) => {
// 	const id = req.userId;
// 	Favorite.findByPk(id)
// 		.then((deleteUser) => deleteUser.destroy())
// 		.then(() => res.send("Favorite destroyed sucessfully"))
// 		.catch((err) => res.send(err));
// };

module.exports = {
	getTransactions,
	addContactToDb,
	postFavorite,
	getFavorites,

};
