import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const RealTimeChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Real-time Data',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: 'start',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Time',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      },
    });

    const updateChart = (newData) => {
      chart.data.labels.push(newData.label);
      chart.data.datasets[0].data.push(newData.value);
      chart.update();
    };

    // Subscribe to real-time data updates
    const dataStream = new WebSocket('ws://localhost:3000/data-stream');
    dataStream.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      updateChart(newData);
    };

    return () => {
      // Unsubscribe from real-time data updates
      dataStream.close();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default RealTimeChart;
