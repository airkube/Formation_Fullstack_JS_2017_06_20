const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const contacts = [{
    prenom: 'John',
    nom: 'Doe',
    id: 123
}, {
    prenom: 'Jean',
    nom: 'Dupont',
    id: 567
}];


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs - 1; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    const server = http.createServer((req, res) => {
        res.setHeader('Content-type', 'application/json');
        res.write(JSON.stringify(contacts));
        res.end();
    });

    server.listen(2345, () => {
        console.log('Server started');
    });

    console.log(`Worker ${process.pid} started`);
}


