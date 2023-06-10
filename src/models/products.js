'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        static associate(models) {
            // Un producto pertenece a un usuario.
            Products.belongsTo(models.Users, { foreignKey: "userId", targetKey: "id" })
            // Muchos productos pertenecen a un carrito.
            Products.belongsToMany(models.Carts, { through: "ProductInCarts", foreignKey: "productId" })
            // Muchos productos pertenecen a una orden.
            Products.belongsToMany(models.Orders, { through: "ProductInOrders", foreignKey: "productId" })
        }
    }
    Products.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.REAL,
        stock: DataTypes.INTEGER,
        available: DataTypes.BOOLEAN,
        userId: { type: DataTypes.INTEGER, field: "user_id" },
        img: DataTypes.ARRAY(DataTypes.STRING)
    }, {
        sequelize,
        modelName: 'Products',
        timestamps: false
    });
    return Products;
};