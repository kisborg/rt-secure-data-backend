require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.port || 3000;


io.on('connection', (socket) => {
  console.log('connected');
  socket.on('message', (evt) => {
    socket.broadcast.emit('message', evt);
  });
});
io.on('disconnect', (evt) => {
  console.log('some people left');
});

http.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});