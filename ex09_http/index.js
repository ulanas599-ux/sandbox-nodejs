import {createServer} from 'node:http';

// Create a local server to receive data from
const server = createServer((req, res) => {
  res.writeHead(200, 
    { 'Content-Type': 'text/html',
      'My-Custom-Header-89': 'My Custom Header Value'
  }

  );


  res.end("<b>Hello from NodeJs server</b>");
  /*res.end(JSON.stringify({
    data: 'Hello World!',
  }));*/
});

server.listen(3000);