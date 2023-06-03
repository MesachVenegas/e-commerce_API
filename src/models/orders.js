'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Una orden le pertenece a un usuario.
      orders.belongsTo(models.users, {
        foreignKey: 'userId',
        targetKey: 'id'
      })
    }
  }
  orders.init({
    totalPrice: DataTypes.REAL,
    userId: DataTypes.INTEGER,
    isCompleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'orders',
    timestamps: false
  });
  return orders;
};