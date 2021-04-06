// HTTP protocol / server
const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Welcome to out home page');
  }
  else if(req.url === '/about'){
    res.end('Welcome to out about page');
  } else {
    res.end('WTF!?');
  }
});

server.listen(5000);