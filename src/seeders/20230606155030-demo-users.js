'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Mesach Venegas',
        email: 'mesach.venegas@hotmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'John Doe',
        email: 'john.doe@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Ian Rosas',
        email: 'iannacus@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
