// server/services/pulseService.js

const DataStream = require('../models/DataStream');
const AnalysisResult = require('../models/AnalysisResult');
const { preprocessDataStream, postprocessAnalysisResult } = require('../ml/utils');
const { analyzeData } = require('../ml/analyzeData');

/**
 * Service function to analyze a data stream.
 * @param {Array} dataStream - The data stream to analyze.
 * @returns {Promise<Object>} - The analysis result.
 */
const analyzeDataStream = async (dataStream) => {
  try {
    // Preprocess the data stream
    const preprocessedDataStream = preprocessDataStream(dataStream);

    // Analyze the preprocessed data stream
    const analysisResult = await analyzeData(preprocessedDataStream);

    // Postprocess the analysis result
    const postprocessedAnalysisResult = postprocessAnalysisResult(analysisResult);

    // Save the data stream and analysis result to the database
    const newDataStream = await DataStream.create({ data: dataStream });
    const newAnalysisResult = await AnalysisResult.create({ result: postprocessedAnalysisResult, dataStreamId: newDataStream.id });

    return newAnalysisResult;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  analyzeDataStream,
};
