const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("favorite", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			unique: true,
		},

		user: {
			type: DataTypes.STRING,
		},
		date_transaction: {
			type: DataTypes.STRING,
		},
		mail: {
			type: DataTypes.STRING,
		},
	});
};
