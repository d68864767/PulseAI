// server/models/migrations/20220101000000-createAnalysisResult.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AnalysisResults', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      result: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      dataStreamId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'DataStreams',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AnalysisResults');
  }
};
