const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.json("hello you are listening to port 3000!");
})

app.post('/login', (req, res) => {
    // Authenticate User
})

app.listen(3000);