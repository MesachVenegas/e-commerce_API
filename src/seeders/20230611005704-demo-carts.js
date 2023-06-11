'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carts', [
      {
        user_id: 1,
        total_price: 0
      },
      {
        user_id: 2,
        total_price: 0
      },
      {
        user_id: 3,
        total_price: 0
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Carts', null, {})
  }
};
