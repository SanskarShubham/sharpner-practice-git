const http  = require('http');
const routes  = require('./routes');

//  console.log("server has started.");
// const server = http.createServer(routes.handler);
const server = http.createServer(routes);

// Start the server
server.listen(3000);
// http://localhost:3000/