// server/models/index.js

const AnalysisResult = require('./AnalysisResult');
const DataStream = require('./DataStream');
const User = require('./User');

// Define associations
AnalysisResult.belongsTo(DataStream, { foreignKey: 'dataStreamId' });
DataStream.hasMany(AnalysisResult, { foreignKey: 'dataStreamId' });

module.exports = {
  AnalysisResult,
  DataStream,
  User,
};
