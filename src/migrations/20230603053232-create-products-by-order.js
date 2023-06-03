'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products_by_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        field: 'order_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      productId: {
        field: 'product_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      quantity: {
        defaultValue: 1,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.REAL
      },
      status: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products_by_orders');
  }
};