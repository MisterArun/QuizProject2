const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require("cors")

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3001",
    }
});
app.use(cors);

// Set up your other Express middleware and routes here
app.get('/', (req, res) => {
    io.emit('message', 'Hello World!');
    res.send("Hello World");
})

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

io.on('connection', (socket) =>{
   socket.on('reach10', data =>{
    console.log(data);
   })
})