const { Account, Favorite } = require("../db");

const deleteFav = async (userId, mail) => {
	// console.log(accountId, mail)

	const account = await Account.findByPk(userId, {
		include: { model: Favorite },
	});
	try {
		await account.favorites.map((el) => {
			el.mail === mail && el.destroy();
		});
		return { success: "Contact favorite successfully deleted" };
	} catch (err) {
		return err;
	}
};
module.exports = {
	deleteFav,
};
