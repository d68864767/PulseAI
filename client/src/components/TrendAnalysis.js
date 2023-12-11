import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import pulseService from '../services/pulseService';

const TrendAnalysis = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const trendData = await pulseService.getTrendData();
      setData(trendData);
    } catch (error) {
      console.error('Error fetching trend data:', error);
    }
  };

  return (
    <div>
      <h2>Trend Analysis</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default TrendAnalysis;
