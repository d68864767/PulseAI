// server/controllers/pulseController.js

const DataStream = require('../models/DataStream');
const AnalysisResult = require('../models/AnalysisResult');
const { preprocessDataStream, postprocessAnalysisResult } = require('../ml/utils');
const { analyzeData } = require('../ml/analyzeData');

/**
 * Controller function to analyze a data stream.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const analyzeDataStream = async (req, res, next) => {
  try {
    const { dataStream } = req.body;

    // Preprocess the data stream
    const preprocessedDataStream = preprocessDataStream(dataStream);

    // Analyze the preprocessed data stream
    const analysisResult = await analyzeData(preprocessedDataStream);

    // Postprocess the analysis result
    const postprocessedAnalysisResult = postprocessAnalysisResult(analysisResult);

    // Save the data stream and analysis result to the database
    const newDataStream = await DataStream.create({ data: dataStream });
    const newAnalysisResult = await AnalysisResult.create({ result: postprocessedAnalysisResult, dataStreamId: newDataStream.id });

    res.status(200).json({ analysisResult: newAnalysisResult });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  analyzeDataStream,
};
