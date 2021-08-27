const { Account, Favorite } = require("../db");

const deleteFav = async (userId, mail) => {
	// console.log(accountId, mail)
	console.log("estoy llegando");
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
	Favorite.findOne({
		where: {
			mail: mail,
		},
	})
		.then((deleteFav) => deleteFav.destroy())
		.then(() => console.log("Fav destroyed sucessfully"))
		.catch((err) => console.log(err));
	// } catch (err) {
	// 	return err;
	// }
};
module.exports = {
	deleteFav,
};
