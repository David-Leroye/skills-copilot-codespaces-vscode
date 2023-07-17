// Create web server application
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const comments = require('./comments');

// Use cors to allow cross-origin resource sharing
app.use(cors());

// Use body parser to parse JSON body
app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = comments.findIndex(comment => comment.id === id);
  comments.splice(index, 1);
  res.json({ id });
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = req.body;
  const index = comments.findIndex(comment => comment.id === id);
  comments[index] = comment;
  res.json(comment);
});

// Start web server
app.listen(3000, () => {
  console.log('Web server listening on port 3000');
});