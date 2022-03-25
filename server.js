require('dotenv').config();
const express = require('express');
const { TokenExpiredError } = require('jsonwebtoken');
const app = express();

const jwt = require('jsonwebtoken');
// node (in terminal)
// require('crypto').randomBytes(64).toString('hex')
app.use(express.json());

const post = [
    {
        username: 'Michael',
        title: 'Post 1'
    },
    {
        username: 'Tim',
        title: 'Post2'
    }
]

app.get('/', (req, res) => {
    res.json("hello you are listening to port 3000!");
})

app.get('/posts', authenticateToken, (req, res) => {
    
})

app.post('/login', (req, res) => {
    // Authenticate User

    const username = req.body.username
    const user = {name: username}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken })

    
})

function authenticateToken(req, res, next) {
    // this helps authenticate our token
    // Bearer Token
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}

app.listen(3000);