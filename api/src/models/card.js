const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('card', {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
          },

        card_num: { 
            type: DataTypes.STRING,
            allowNull: true,
        },

        card_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        card_expiration_data: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        card_security_num: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    })
}