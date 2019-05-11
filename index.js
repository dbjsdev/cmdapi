const logger = require('./logger');
const config = require('./config');
const express = require('express');
const http = require('http');
const app = express();

require('./startup/routes')(app);

const server = http.createServer(app);
server.listen(config.port,()=>{
   logger.info(`Listening on port ${config.port}`); 
});

module.exports = server;