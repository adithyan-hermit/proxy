const express = require("express");
/* const app = express();
var server = require('http').Server(app);

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = server.listen(process.env.PORT || '3000', () => {
  console.log("Your app is listening on port " + listener.address().port);
}); */
const http = require('http');
const httpProxy = require('http-proxy');

// Create a new proxy server instance
const proxy = httpProxy.createProxyServer({});

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Proxy the incoming request to the target server
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

// Handle proxy errors
proxy.on('error', (err, req, res) => {
  console.error('Proxy Error:', err);
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Something went wrong with the proxy :(');
});

// Listen on port 8000
server.listen(8000, () => {
  console.log('Proxy server listening on port 8000');
});
