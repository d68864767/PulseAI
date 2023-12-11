import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnomalyDetection = () => {
  const [anomalies, setAnomalies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/anomalies');
        setAnomalies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Anomaly Detection</h2>
      {anomalies.length > 0 ? (
        <ul>
          {anomalies.map((anomaly) => (
            <li key={anomaly.id}>
              <p>{anomaly.timestamp}</p>
              <p>{anomaly.value}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No anomalies found.</p>
      )}
    </div>
  );
};

export default AnomalyDetection;
