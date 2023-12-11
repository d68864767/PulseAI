import React, { useState, useEffect } from 'react';
import RealTimeChart from './RealTimeChart';
import AnomalyDetection from './AnomalyDetection';
import TrendAnalysis from './TrendAnalysis';
import pulseService from '../services/pulseService';

const Dashboard = () => {
  const [dataStream, setDataStream] = useState([]);
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    const fetchDataStream = async () => {
      const stream = await pulseService.getDataStream();
      setDataStream(stream);
    };

    fetchDataStream();
  }, []);

  const analyzeData = async () => {
    const result = await pulseService.analyzeData(dataStream);
    setAnalysisResult(result);
  };

  return (
    <div>
      <h1>PulseAI Dashboard</h1>
      <RealTimeChart dataStream={dataStream} />
      <button onClick={analyzeData}>Analyze Data</button>
      {analysisResult && (
        <>
          <AnomalyDetection result={analysisResult.anomalyDetection} />
          <TrendAnalysis result={analysisResult.trendAnalysis} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
