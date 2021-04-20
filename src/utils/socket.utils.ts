import { app } from "../app";

const http = require('http');
const server = http.createServer(app);
export const startSocketIO = require('socket.io')(server, {
  cors: {
    origins: ['http://localhost:4200']
  }
});


export const emitSocketEvent = (eventName: string, data: any) => {
  startSocketIO.emit(eventName, data);
}




