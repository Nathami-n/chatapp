import {WebSocketServer} from 'ws';

const server = new WebSocketServer({port:'3000'});




server.on('connection', (socket)=> {
    socket.on('message', (msg)=> {
     
        socket.send(msg.toString());
    });
});