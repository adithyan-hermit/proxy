const express = require("express");
const app = express();
var server = require('http').Server(app);

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = server.listen(process.env.PORT || '3000', () => {
  console.log("Your app is listening on port " + listener.address().port);
});