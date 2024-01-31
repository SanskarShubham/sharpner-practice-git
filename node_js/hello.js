// Create a new Node.js program
const http = require('http');

// Create a new HTTP server
const server = http.createServer((req, res) => {
  // Send the response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! ');
});

// Start the server
server.listen(8080);
// http://localhost:8080/