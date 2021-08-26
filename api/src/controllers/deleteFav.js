const { Account, Favorite } = require("../db");

const deleteFav = async (userId, mail) => {
	// console.log(accountId, mail)

	const account = await Account.findByPk(userId, {
		include: { model: Favorite },
	});
	// try {
	// let newFavorites = await account.dataValues.favorites.filter((el) => {
	// 	el.mail !== mail;
	// });

	// await account.setFavorites([]);
	// const favorites = await Favorite.findByPk(userId);
	// await favorites.destroy();
	// return { success: "Contact favorite successfully deleted" };
	Favorite.findAll({
		where: {
			mail: mail,
		},
	})
		.then((deleteFav) => deleteFav.destroy())
		.then(() => res.send("Fav destroyed sucessfully"))
		.catch((err) => res.send(err));
	// } catch (err) {
	// 	return err;
	// }
};
module.exports = {
	deleteFav,
};
