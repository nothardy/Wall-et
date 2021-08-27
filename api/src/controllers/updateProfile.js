const { Account } = require("../db");
const bcrypt = require("bcrypt");
const updateProfile = async (req, res, next) => {
	const id = req.body.id;
	let user = req.body;
	try {
		let userDb = await Account.findByPk(id);
		if (user.password) {
			user.password = await bcrypt.hash(user.password, 12);
		}

		userDb.fullname = user.fullname;
		userDb.mail = user.mail;
		userDb.dni = user.dni;
		userDb.birth_date = user.birth_date;
		userDb.ubication = user.ubication;
		userDb.save();

		//await Account.update({...user},
		//  {where:
		//       {id: id}
		//  });
		return res.json({ message: true }).status(200);
	} catch (error) {
		next(error);
		return res.json(error);
	}
};

module.exports = {
	updateProfile,
};
