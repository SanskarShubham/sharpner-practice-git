// Create a new Node.js program
const http = require('http');

// Create a new HTTP server
const server = http.createServer((req, res) => {
  // Send the response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Shubham Ojha');
});


// Start the server
server.listen(4000);
// http://localhost:4000/