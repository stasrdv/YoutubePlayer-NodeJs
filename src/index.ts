import { app } from './app';
import { dbConnector } from './utils/db.connector';
import { server } from './utils/server.connector';
import { startSocketIO } from './utils/socket.utils';


const startServer = () =>
  dbConnector().then(() => {
    startSocketIO;
    server.listen(app.get('port'), () => {
      console.log(' App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
      console.log(' Press CTRL-C to stop\n');
    });
  }).catch(error => { console.log(error) });


startServer();




