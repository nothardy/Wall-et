const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('contact', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
        },
        
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cvu: {
            type: DataTypes.STRING,
        },

    })
}