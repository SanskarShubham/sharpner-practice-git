// Create a new Node.js program
const http = require('http');

// Create a new HTTP server
const server = http.createServer((req, res) => {
  // Send the response
  // console.log('Shubham Ojha1');

  //  console.log(req.url,req.method, req.headers);
  // process.exit();
console.log(req.url);
  res.setHeader('content-type', 'text/html');
  res.write('<html>');
  res.write('<head> <title>Document</title></head>');
  if (req.url === '/home') {
    res.write('<body><p>Welcome home</p></body>');
  }
  else if (req.url === '/node') {
    
    res.write('<body><p> Welcome to my Node Js project</p></body>');
  }
  else if (req.url === '/about') {
    res.write('<body><p> Welcome to About Us page</p></body>');
  } else {
    res.write('<body><p>Welcome home</p></body>');
  }
  res.write('</html>');
  res.end();
});


// Start the server
server.listen(3000);
// http://localhost:3000/