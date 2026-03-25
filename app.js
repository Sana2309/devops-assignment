const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello DevOps using Jenkins!');
});

server.listen(8080);
