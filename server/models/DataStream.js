// server/models/DataStream.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const DataStream = sequelize.define('DataStream', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  data: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
  },
});

module.exports = DataStream;
