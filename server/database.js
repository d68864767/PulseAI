// server/database.js

const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.database.name, null, null, {
  dialect: 'mysql',
  host: config.database.host,
  port: config.database.port,
});

const AnalysisResult = sequelize.define('AnalysisResult', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  result: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

const DataStream = sequelize.define('DataStream', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

AnalysisResult.sync();
DataStream.sync();
User.sync();

module.exports = {
  AnalysisResult,
  DataStream,
  User,
};
