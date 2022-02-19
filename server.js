require('dotenv').config();
const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('message', (evt) => {
    socket.broadcast.emit('message', evt);
  });
});
io.on('disconnect', () => {
  console.log('some people left');
});

http.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
