
const express = require('express');
const path = require('path');
const redis = require('redis');
const app = express();
const port = 5000;

const redisClient = redis.createClient({
  host: 'redis',
  port: 6379,
});

redisClient.on('connect', function() {
  console.log('Connected to Redis');
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`UserUI app listening at http://localhost:${port}`);
});
