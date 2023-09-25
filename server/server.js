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

const rooms = {};

io.on("connection", (socket) => {
  console.log("Client connected");

  

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
    console.log("Rooms: " + JSON.stringify(rooms));
    socket.emit('quizCreated', roomKey);
  });

  socket.on('joinRoom', (playerData) => {

    const playerName = playerData.username;
    const roomKey = playerData.roomno;
    console.log("Rooms: " + JSON.stringify(rooms));
    const room = rooms[roomKey];
    console.log("Check room: ", room);
    console.log("Room received:", roomKey);
    if (room) {
      socket.join(roomKey);
      console.log('socket.join(roomKey)');
      room.players.push({ name: playerName, socketId: socket.id });

      io.to(roomKey).emit('playerJoined', room.players);
    } else {
      socket.emit('roomNotFound');
      console.log("Room not found");
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