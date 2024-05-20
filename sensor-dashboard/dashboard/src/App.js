import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const App = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/sensor-data');
        setSensorData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    fontSize: '2rem',
  };

  const chartContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        Sensor Data Dashboard
      </header>
      <div style={chartContainerStyle}>
        <LineChart
          width={800}
          height={400}
          data={sensorData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="motionDetected" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default App;
