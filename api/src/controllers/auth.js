const jwt = require("jsonwebtoken");
const { Account, Transaction, Card } = require("../db");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
	try {
		const { mail, password } = req.body;
		const user = await Account.findOne({
			where: { mail: mail },
			include: [{ model: Transaction }, { model: Card }],
		});
		//if the user doesn't exists
		if (!user) {
			return res.status(404).send("The mail doesn't exists");
		}
		//if the password is wrong
		if (bcrypt.compareSync(password, user.password)) {
			const token = jwt.sign({ id: user.id }, "mysecretkey", {
				expiresIn: 60 * 30, // 60*60*24s = 1day
			});
			return res.status(200).json({
				user: user,
				auth: true,
				token: token,
			});
		}
		//if the data is correct
		//generating the token

		return res.status(401).send({ auth: false, token: null });
	} catch (error) {
		console.log(error);
	}
};

const logout = (req, res) => {
	return res.status(200).send({ auth: false, token: null });
};

module.exports = {
	login,
	logout,
};
