const express = require('express');
const app = express();

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
    
})

app.listen(3000);