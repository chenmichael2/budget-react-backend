require('dotenv').config();
const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
// node (in terminal)
// require('crypto').randomBytes(64).toString('hex')
app.use(express.json());

app.get('/', (req, res) => {
    res.json("hello you are listening to port 3000!");
})

app.post('/login', authenticateToken, (req, res) => {
    // Authenticate User

    const username = req.body.username
    const user = {name: username}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken })

    
})

function authenitcateToken(req, res, nex) {
    // this helps authenticate our token
}

app.listen(3000);