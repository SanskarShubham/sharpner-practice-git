const http  = require('http');
const routes  = require('./routes');

// console.log(routes.someText);
// const server = http.createServer(routes.handler);
const server = http.createServer(handler);

// Start the server
server.listen(3000);
// http://localhost:3000/