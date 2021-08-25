const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("charge", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			unique: true,
		},

		from: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		to: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		card_num: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		amount: {
			type: DataTypes.INTEGER,
		},

		type_transaction: {
			type: DataTypes.ENUM("Payment", "Services", "Transfer"),
		},

		state: {
			type: DataTypes.ENUM("pending", "in progress", "done"),
		},
	});
};
