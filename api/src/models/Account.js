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
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },

        cvu: {
            type: DataTypes.STRING,
        },

        photo: {
            type: DataTypes.STRING,
        },

        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    })
}