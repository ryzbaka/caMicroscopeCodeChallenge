const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3500;
const chatLog=["demo-1","demo-2","demo-3"]
app.use(bodyParser.json());
require("dotenv").config({ path: path.join(__dirname, ".env") });

const server = http.createServer(app);
const io = require('socket.io')(server);

io.sockets.on('connection',(socket)=>{
    console.log("connected to client via websocket.");
    socket.on('client-sent-message',data=>{
        chatLog.push(data);
        io.emit('new-message',data);
    })
})

app.get("/",(req,res)=>res.send("working"));

app.get("/demoMessages", (req,res)=>{
    res.json({messages:chatLog})
})

server.listen(PORT,()=>console.log(`Server started on port ${PORT}`));
