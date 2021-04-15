const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '1',
      title: 'first-ever-server-post',
      content: 'This is coming from the server, 1'
    },
    {
      id: '2',
      title: 'second-ever-server-post',
      content: 'This is coming from the server, 2'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts,
    status: 200
  });
});

module.exports = app;
