
const express = require('express');
const redis = require('redis');
const app = express();
const port = 5001;

const redisClient = redis.createClient({
  host: 'redis',
  port: 6379,
});

redisClient.on('connect', function() {
  console.log('Connected to Redis');
});

app.use(express.json());

app.post('/response', (req, res) => {
  const { response } = req.body;
  
  redisClient.hincrby('responses', response, 1, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error storing response' });
    }
    res.json({ success: true });
  });
});

app.get('/analytics', (req, res) => {
  redisClient.hgetall('responses', (err, responses) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching analytics' });
    }
    
    const totalResponses = Object.values(responses).reduce((acc, count) => acc + parseInt(count), 0);
    res.json({ totalResponses, responses });
  });
});

app.listen(port, () => {
  console.log(`Analytics app listening at http://localhost:${port}`);
});
