const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    },
]

app.get('/post', (req, res) => {
    res.json(posts)
})

app.get('/login', (req, res) => {
    //Authenticate User
})

app.listen(3000);