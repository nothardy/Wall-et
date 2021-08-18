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
            allowNull: false,
        },
      
        dni: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      
        ubication: {
            type: DataTypes.STRING,
        },
      
        birth_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        
        balance: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },

        cvu: {
            type: DataTypes.STRING,
        },

        photo: {
<<<<<<< HEAD
            type: DataTypes.STRING,
=======
            type: DataTypes.TEXT,
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
        },

        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
<<<<<<< HEAD
=======
        activated: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
    })
}