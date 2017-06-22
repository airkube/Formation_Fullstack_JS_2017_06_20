const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.url);
    next();
});
app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/contact', (req, res) => {
    res.send('Contact');
});

app.get('/redirect', (req, res) => {
    res.redirect('http://www.google.fr/');
});

app.listen(8080, () => {
   console.log('Server started');
});