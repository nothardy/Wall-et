const { Account } = require("../db");

const updatePhoto = async (req, res, next) => {
	const { id, photo } = req.body;

	try {
		let account = await Account.findByPk(id);
		account.photo = photo;
		await account.save();

		const user = await Account.findByPk(id);

		/* const user = await Account.update({ photo }, { 
            where: { 
                id 
            }
        }); */

		return res.status(200).json(user);
	} catch (error) {
		next(error);
		return res.json(error);
	}
};

module.exports = {
	updatePhoto,
};
