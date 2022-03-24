const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json("hello you are listening to port 3000!");
})

app.listen(3000);