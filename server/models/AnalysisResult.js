// server/models/AnalysisResult.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const AnalysisResult = sequelize.define('AnalysisResult', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  result: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  dataStreamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'DataStream',
      key: 'id',
    },
  },
});

module.exports = AnalysisResult;
