const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();
const PORT = process.env.PORT || 3000;

let posts = [];
let comments = [];

app.set('view engine', 'ejs');

// We use body parser to grab information from HTML form fields
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render("index", {
        pageTitle: "Página Inicial"
    });
});

app.get('/atividade', function (req, res) {
    res.render("activity", {
        posts: posts,
        pageTitle: "Atividade"
    });
});

app.get('/post/:postName', function (req, res) {
    const requestedTitle = _.lowerCase(req.params.postName);

    posts.forEach(function (post) {
        const storedTitle = _.lowerCase(post.title);

        if (storedTitle === requestedTitle) {
            res.render("post", {
                name: post.name,
                title: post.title,
                content: post.content,
                date: post.date,
                comments: comments,
                pageTitle: post.name
            });
        }
    });
});

app.get('/noticias', function (req, res) {
    res.render("news", {
        pageTitle: "Todas as Notícias"
    });
});

app.get('/noticia-detalhe', function (req, res) {
    res.render("news-detail", {
        pageTitle: "Notícia"
    });
});

app.get('/about-us', function (req, res) {
    res.render("about-us", {
        pageTitle: "Sobre os Criadores"
    });
});

app.get("/compose", function (req, res) {
    res.render("compose", {
        pageTitle: "Novo Post"
    });
});

app.get("/comments", function (req, res) {
    res.render("comments", {
        comments: comments
    });
});

app.post("/comments", function (req, res) {
    let commentDate = getDate();

    // Request the data that was inserted in the form
    const comment = {
        commentName: req.body.commentUsername,
        commentContent: req.body.commentBody,
        commentDate: commentDate
    };

    comments.push(comment);

    res.redirect('back');

});

app.post("/compose", function (req, res) {
    let postDate = getDate();

    // Request the data that was inserted in the form
    const post = {
        name: req.body.postUsername,
        title: req.body.postTitle,
        content: req.body.postBody,
        date: postDate
    };

    posts.push(post);

    res.redirect("/atividade");
});

function getDate() {
    let date = new Date();
    // Define the properties that this date will have
    let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    // Convert the date into pt-PT format.
    return date.toLocaleString("pt-PT", options);
}

app.listen(PORT, function () {
    console.log("Server is up and running on port " + PORT);
});

