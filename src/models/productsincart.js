'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductsInCart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProductsInCart.init({
        productId: DataTypes.INTEGER,
        cartId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        price: DataTypes.REAL,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'ProductsInCart',
    });
    return ProductsInCart;
};