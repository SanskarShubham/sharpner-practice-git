
const fs = require('fs');
const http  = require('http');

const server = http.createServer((req,res)=>{
    //  console.log(req.method);
  res.setHeader('content-type', 'text/html');

  if (req.url === '/' && req.method === 'POST') {
    const body = [];
    req.on('data',(chunk)=>{
        body.push(chunk);
    })
    return req.on('end',()=>{
     const parsedData = Buffer.concat(body).toString();
     const message = parsedData.split('=')[1];   
     fs.writeFileSync('message.txt',message);
     res.statusCode = 302;
 
     res.setHeader('Location','/');
     return res.end();
    })
   
  }
  if (req.url === '/') {
    res.write('<html>');
  res.write('<head> <title>file system in JS</title></head>');
  res.write('<body>');
  const message = fs.readFileSync('message.txt','utf-8');
//   console.log(message);
  if (message.trim() !== '') {
    res.write(`<p>${message}</p>`);
  }
    res.write('<form action="/" method="POST"><input type="text" name="message"><button type="submit">Add</button></form></body>');
  res.write('</html>');
  return res.end();
  
  }

  
  res.write('<html>');
  res.write('<head> <title>file system in JS</title></head>');
  res.write('<body><p> Welcome to my Node Js project</p></body>');
  res.write('</html>');
  res.end();
});

// Start the server
server.listen(3000);
// http://localhost:3000/