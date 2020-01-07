const http = require("http");
const express = require("express");
const app = express();
const PORT = 3000;
const server = http.createServer(app);
const es6Renderer = require("express-es6-template-engine");

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
const blogData = [
    {
        title: "First blog post",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam ab quod dolor optio quidem pariatur fugiat magni adipisci non velit necessitatibus numquam, ipsum porro quas iure exercitationem culpa perferendis."
    },
    {
        title: "Second blog post",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium vitae vel magni quaerat corporis obcaecati dignissimos, pariatur facere temporibus maiores odit sequi assumenda officiis eaque rem! Accusamus iste debitis quam."
    },
    {
        title: "Third blog post",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quas quod facilis iure ducimus ratione perferendis amet non soluta alias aperiam, vitae modi et libero, ullam consectetur voluptatum voluptas. Autem?"
    }
];

app.get('/', (req, res) =>{
    res.render('home', {
        'locals': {
            pageTitle: "words",
            pageHeader: "more better words"
        },
        partials:{
            head:"/partials/head",
            nav:"/partials/nav",
            tail: "/partials/tail"
        }
    });
});

app.get('/blog', (req, res) =>{
    res.render('blog',{
        'locals':{
            pageTitle: 'some tiny words',
            blogPosts: blogData
        },
        partials:{
            head:"/partials/head",
            nav:"/partials/nav",
            tail: "/partials/tail"
        }
    });
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));