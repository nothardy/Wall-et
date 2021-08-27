const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('cashCode', {
        
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
          },
          
          code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        state: {
            type: DataTypes.ENUM( 'active', 'expired' ),
        }
    })
}