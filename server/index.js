const express = require("express");
const app = express();
const http = require("http");
const{ Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],

    }
});

io.on("connection", (socket) => {
  console.log(`user connected: ${socket.id}`);

  socket.on('message', (data) =>{
//   socket.emit('message response', data);
  console.log(data);
  });

  socket.on('disconnected', () =>{
    console.log(`user disconnected`);
      });
      
})

server.listen(3001, ()=>{
    console.log("server is running");
})