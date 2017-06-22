const net = require('net');

const server = net.createServer(() => {
    console.log('Client connected');
});

/*
server.on('connection', () => {
    console.log('Client connected');
});
server.on('listening', () => {
    console.log('Server started');
});
*/

server.listen(1234, () => {
    console.log('Server started');
});