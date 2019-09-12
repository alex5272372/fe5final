const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('./db');

const app = express();
const upload = multer({dest: 'client/build/uploads'});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/users', async function(req, res) {
    res.json(await db.getUsers());
});

app.get('/api/posts', async function(req, res) {
    res.json(await db.getPosts());
});

app.post('/api/user', upload.single('icon'), async function(req, res) {
    await db.addUser({
        login: req.body.login,
        password: req.body.password,
        icon: req.file.filename,
        subs: []
    });
});

app.post('/api/post', upload.single('photo'), async function(req, res) {
    await db.addPost({
        postDate: Date.Now(),
        postUser: req.body.postUser,
        photo: req.file.filename,
        likes: [],
        comments: []
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

app.put('/api/post/:id', async function(req, res) {
    await db.editPost(id, {
        postDate: req.body.postDate,
        postUser: req.body.postUser,
        photo: req.body.photo,
        likes: req.body.likes,
        comments: req.body.comments
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`${port} is the magic port`));
