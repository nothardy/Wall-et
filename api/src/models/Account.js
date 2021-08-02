const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('account', {
        
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        cvu: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    })
}