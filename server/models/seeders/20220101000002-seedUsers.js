// server/models/seeders/20220101000002-seedUsers.js

const bcrypt = require('bcrypt');
const { User } = require('../index');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('password123', 10);

    await User.bulkCreate([
      {
        username: 'user1',
        email: 'user1@example.com',
        password,
        createdAt: new Date(),
      },
      {
        username: 'user2',
        email: 'user2@example.com',
        password,
        createdAt: new Date(),
      },
      {
        username: 'user3',
        email: 'user3@example.com',
        password,
        createdAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await User.destroy({ where: {} });
  }
};
