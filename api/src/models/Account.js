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
            unique: true,
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
            type: DataTypes.TEXT,
        },

        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        activated: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        /* favorites: {
            // una manera que encontre en stackoverflow de declarar array de objetos
            type: DataTypes.STRING,
            get: function () {
              return JSON.parse(this.getDataValue("favorites"));
            },
            set: function (value) {
              return this.setDataValue("favorites", JSON.stringify(value));
            }, 
        }, */
          
    })
}