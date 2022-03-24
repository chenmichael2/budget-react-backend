const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

app.use(express.json());

app.get('/', (req, res) => {
    res.json("hello you are listening to port 3000!");
})

app.post('/login', (req, res) => {
    // Authenticate User

    
})

app.listen(3000);