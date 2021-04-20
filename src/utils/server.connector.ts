import { app } from "../app";

const http = require('http');
const server = http.createServer(app);


export { server }