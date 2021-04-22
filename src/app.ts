import express from 'express';
import cors from 'cors';
import { requestLog } from './middleware/request-log';
import { errorHandler, logErrors } from './middleware/errors';
import expressWinston from 'express-winston';
import { loggerOptions } from './utils/winston'
import { playlistRouter } from './routes/playlist.routes';


const app = express();
app.use(express.json());
app.use(cors());
app.use(requestLog);
app.use(expressWinston.errorLogger(loggerOptions()));
app.use(logErrors);
app.use(errorHandler);
app.use('/api', playlistRouter);
app.set('port', process.env.PORT || 8000);


export { app };

