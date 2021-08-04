const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('account', {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
        },

        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        fullname: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        dni: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        ubication: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        birth_date: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        balance: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true,
        },

        cvu: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    })
}