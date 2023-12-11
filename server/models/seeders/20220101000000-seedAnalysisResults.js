// server/models/seeders/20220101000000-seedAnalysisResults.js

const { AnalysisResult } = require('../index');

const seedAnalysisResults = async () => {
  try {
    await AnalysisResult.bulkCreate([
      {
        result: { anomaly: true, trend: 'up' },
        dataStreamId: 1,
      },
      {
        result: { anomaly: false, trend: 'down' },
        dataStreamId: 2,
      },
      {
        result: { anomaly: true, trend: 'up' },
        dataStreamId: 3,
      },
    ]);
    console.log('Analysis results seeded successfully.');
  } catch (error) {
    console.error('Error seeding analysis results:', error);
  }
};

module.exports = seedAnalysisResults;
