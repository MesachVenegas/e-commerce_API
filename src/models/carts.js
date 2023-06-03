'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un carrito pertenece a un usuario.
      carts.belongsTo(models.users, {
        foreignKey: 'userId',
        targetKey: 'id'
      })
    }
  }
  carts.init({
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'carts',
    timestamps: false,
  });
  return carts;
};