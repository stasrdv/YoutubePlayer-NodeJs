import winston from 'winston';

export const winstonFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.json(),
    winston.format.printf((info) => {
      const {
        timestamp, level, message, ...args
      } = info;
  
      const ts = timestamp.slice(0, 19).replace('T', ' ');
      return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
    }),
  );


  export const loggerOptions = () => ({
    transports: [
      new winston.transports.Console(),
    ],
    winstonFormat,
  });