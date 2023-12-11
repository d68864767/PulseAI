// ml/models.js

const tf = require('@tensorflow/tfjs-node');

// Define the machine learning models for anomaly detection and trend analysis

// Anomaly Detection Model
const anomalyDetectionModel = tf.sequential();
anomalyDetectionModel.add(tf.layers.dense({ units: 64, inputShape: [10], activation: 'relu' }));
anomalyDetectionModel.add(tf.layers.dense({ units: 32, activation: 'relu' }));
anomalyDetectionModel.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

// Trend Analysis Model
const trendAnalysisModel = tf.sequential();
trendAnalysisModel.add(tf.layers.dense({ units: 128, inputShape: [10], activation: 'relu' }));
trendAnalysisModel.add(tf.layers.dense({ units: 64, activation: 'relu' }));
trendAnalysisModel.add(tf.layers.dense({ units: 1, activation: 'linear' }));

module.exports = {
  anomalyDetectionModel,
  trendAnalysisModel,
};
