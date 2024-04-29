import {Server} from 'ws';
const server = new Server({port: '3000'});

server.on('connection', (socket) => {
    socket.on('message', (msg)=> {
        console.log(msg);
        socket.send(`${msg}`);
    });
});