const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3001",
  },
});
app.use(cors);

app.get("/", (req, res) => {
  io.emit("message", "Hello World!");
  res.send("Hello World");
});


io.on("connection", (socket) => {
  console.log("Client connected");
  
const rooms = {};

socket.on("createQuiz", (quizData) => {
  const roomKey = quizData.key;
  const room = {
    difficulty: quizData.difficulty,
    numberOfQuestions: quizData.numberOfQuestions,
    categories: quizData.categories,
    timer: quizData.timer,
    players: [], 
    quizQuestions: [], 
  };

  rooms[roomKey] = room;

  socket.emit('quizCreated', roomKey);
});

  socket.on('joinRoom', (roomKey, playerName) => {
    const room = rooms[roomKey];
    if (room) {
      socket.join(roomKey);
      console.log('socket.join(roomKey)');
      room.players.push({ name: playerName, socketId: socket.id });

      io.to(roomKey).emit('playerJoined', room.players);
    } else {
      socket.emit('roomNotFound');
    }
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});