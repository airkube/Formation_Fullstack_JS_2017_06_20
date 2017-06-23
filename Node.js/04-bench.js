const http = require('http');

const contacts = [{
    prenom: 'John',
    nom: 'Doe',
    id: 123
}, {
    prenom: 'Jean',
    nom: 'Dupont',
    id: 567
}];


const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.write(JSON.stringify(contacts));
    res.end();
});

server.listen(1234, () => {
    console.log('Server started');
});