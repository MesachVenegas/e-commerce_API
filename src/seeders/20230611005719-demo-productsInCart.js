'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductInCarts', [
      {
        product_id: 1,
        cart_id: 1,
        quantity: 1,
        price: 19.99,
        ordered: false,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        product_id: 2,
        cart_id: 1,
        quantity: 1,
        price: 229.99,
        ordered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 3,
        cart_id: 1,
        quantity: 1,
        price: 349.99,
        ordered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductInCarts', null, {})
  }
};
