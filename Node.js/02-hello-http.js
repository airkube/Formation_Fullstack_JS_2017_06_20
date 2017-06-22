const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request received');

    switch (req.url) {
        case '/':
            res.write('Home');
            break;
        case '/contact':
            res.write('Contact');
            break;
        case '/redirect':
            res.statusCode = 302;
            res.setHeader('Location', 'http://www.google.fr/');
            break;
        default:
            res.statusCode = 404;
            res.write('Not Found');

    }
    res.end();
});

server.listen(1234, () => {
    console.log('Server started');
});