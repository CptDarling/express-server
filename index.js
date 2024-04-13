const fs = require('fs');
const https = require('https');
const express = require('express');

const privateKey = fs.readFileSync('example.key', 'utf8');
const certificate = fs.readFileSync('example.crt', 'utf8');

const credentials = { key: privateKey, cert: certificate };

const app = express();

app.get("/", (req, res) => {
  res.writeHead(200);
  res.end("<h1>Home</h1><p>Hello world!</p>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

var httpsServer = https.createServer(credentials, app).listen(443, () => {
  console.log("Listen securely on port 443...");
});

httpsServer.on('error', (error) => {
  console.error(error);
});
