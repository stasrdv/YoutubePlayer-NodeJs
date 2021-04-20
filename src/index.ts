import { app } from './app';
import { dbConnector } from './utils/db.connector';
import { server } from './utils/server.connector';


const startServer = () =>
  dbConnector().then(() => {
    server.listen(app.get('port'), () => {
      socketIO;
      console.log(' App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
      console.log(' Press CTRL-C to stop\n');
    });
  }).catch(error => { console.log(error) });


startServer();

export const socketIO = require('socket.io')(server, {
  cors: {
    origins: ['http://localhost:4200']
  }
});


