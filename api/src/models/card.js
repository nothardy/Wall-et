const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('card', {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
<<<<<<< HEAD
          defaultValue: DataTypes.UUIDV4,
            unique: true,
          },

        card_num: { 
            type: DataTypes.STRING,
            allowNull: true,
=======
            defaultValue: DataTypes.UUIDV4,
            unique: true,
        },

        card_num: {
            type: DataTypes.STRING,
            allowNull: false,
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
        },

        card_name: {
            type: DataTypes.STRING,
<<<<<<< HEAD
            allowNull: true,
=======
            allowNull: false,
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
        },

        card_expiration_data: {
            type: DataTypes.STRING,
<<<<<<< HEAD
            allowNull: true,
=======
            allowNull: false,
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
        },

        card_security_num: {
            type: DataTypes.STRING,
<<<<<<< HEAD
            allowNull: true,
=======
            allowNull: false,
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
        },
    })
}