const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/sensorDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Sensor Data Schema
const sensorSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  motionDetected: Boolean
});

const SensorData = mongoose.model('SensorData', sensorSchema);

// POST API for adding sensor data
app.post('/api/sensor-data', async (req, res) => {
  const { motionDetected } = req.body;

  const newSensorData = new SensorData({ motionDetected });
  try {
    await newSensorData.save();
    res.status(201).send(newSensorData);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET API for fetching sensor data
app.get('/api/sensor-data', async (req, res) => {
  try {
    const sensorData = await SensorData.find().sort({ timestamp: -1 }).limit(100);
    res.status(200).send(sensorData);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
