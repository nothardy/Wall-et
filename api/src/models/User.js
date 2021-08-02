const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('user', {
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

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    birth_data: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
