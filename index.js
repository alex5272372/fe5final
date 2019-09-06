const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Put all API endpoints under '/api'
app.get('/api/users', async function(req, res) {
    res.json(await db.getUsers());
});

app.post('/api/user', async function(req, res) {
    await db.addUser({
        login: req.body.login,
        password: req.body.password,
        icon: req.body.icon,
        subs: []
    });
});

app.put('/api/user/:id', async function(req, res) {
    await db.editUser(id, {
        login: req.body.login,
        password: req.body.password,
        icon: req.body.icon,
        subs: req.body.subs
    });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`${port} is the magic port`));
