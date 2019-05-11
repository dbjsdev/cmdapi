const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp({
        format: 'YYYY-MM-DD hh:mm:ss A ZZ',
      }),
    winston.format.json()),
    transports : [
        new winston.transports.Console(),
        new winston.transports.File({filename: './logs/combined.log'}),
        new winston.transports.File({filename: './logs/error.log', level: 'error'})
    ],
    exceptionHandlers: [
        new winston.transports.File({filename: './logs/error.log'})
    ],
    exitOnError: false
});

process.on('unhandledRejection' ,(exception) =>{
    throw(exception);
});

module.exports = logger;