'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un usuario tiene muchos productos
      users.hasMany(models.products, { foreignKey: 'userId' });
      // Un usuario tiene un carrito
      users.hasOne(models.carts, { foreignKey: 'userId' });
      // Un usuario puede crear muchas ordenes.
      users.hasMany(models.orders, { foreignKey: 'userId' });
    }
  }
  users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    createdAt: 'registered_at',
    updatedAt: 'updated_at',
    modelName: 'users',
  });
  return users;
};