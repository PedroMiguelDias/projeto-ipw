const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/atividade', function(req, res) {
  res.sendFile(__dirname + "/atividade.html");
});

app.get('/noticias', function(req, res) {
  res.sendFile(__dirname + "/noticias.html");
});

app.get('/sobre-nos', function(req, res) {
  res.sendFile(__dirname + "/sobre-nos.html");
});

app.listen(PORT, function () {
  console.log("Server is up and running on port " + PORT);
});

