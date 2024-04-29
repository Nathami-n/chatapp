import {WebSocketServer} from "ws";
const server = new WebSocketServer({port: '5000'});

server.on('connection', (socket) => {
    socket.on('message', (msg)=> {
        console.log(msg);
        socket.send(`${msg}`);
    });
});