const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/atividade', function(req, res) {
  res.sendFile(__dirname + "/activity.html");
});

app.get('/post', function(req, res) {
  res.sendFile(__dirname + "/post.html");
});

app.get('/noticias', function(req, res) {
  res.sendFile(__dirname + "/news.html");
});

app.get('/noticia-detalhe', function(req, res) {
  res.sendFile(__dirname + "/news-detail.html");
});

app.get('/sobre-nos', function(req, res) {
  res.sendFile(__dirname + "/about-us.html");
});

app.listen(PORT, function () {
  console.log("Server is up and running on port " + PORT);
});

