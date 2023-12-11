```javascript
import axios from 'axios';

const pulseService = {
  getDataStream: async () => {
    try {
      const response = await axios.get('/api/dataStream');
      return response.data;
    } catch (error) {
      console.error('Error fetching data stream:', error);
      return [];
    }
  },

  analyzeData: async (dataStream) => {
    try {
      const response = await axios.post('/api/analyzeData', { dataStream });
      return response.data;
    } catch (error) {
      console.error('Error analyzing data:', error);
      return null;
    }
  },

  getTrendData: async () => {
    try {
      const response = await axios.get('/api/trendData');
      return response.data;
    } catch (error) {
      console.error('Error fetching trend data:', error);
      return [];
    }
  },
};

export default pulseService;
```
