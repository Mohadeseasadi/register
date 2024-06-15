const redis = require('redis')

const config = require('../config/redis')

const redisClient = redis.createClient({
    host: config.host , 
    port: config.port
})

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});
  
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});
  
module.exports = redisClient;