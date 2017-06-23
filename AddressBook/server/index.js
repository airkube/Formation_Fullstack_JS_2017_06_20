const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const contactRoutes = require('./routes/contact');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/addressbook');

const port = process.env.PORT || 8080;
const app = express();

// On est en dev si pas de variable d'environnement PORT
if (!process.env.PORT) {
  const webpackConf = require('../webpack.config');
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  app.use(webpackMiddleware(webpack(webpackConf), { serverSideRender: true }));
}
else {
  app.use(express.static(path.resolve(__dirname + '/../dist')));
}

app.use(morgan('dev'));
app.use('/api', cors());

app.use('/api/contacts', contactRoutes);

app.use('/api', (req, res) => {
  res.statusCode = 404;
  res.json({
    msg: 'Not Found'
  });
});

// On est en dev si pas de variable d'environnement PORT
if (!process.env.PORT) {
  app.use((req, res) => {

    // TODO Générer les scripts dynamiquement
    // const assetsNames = res.locals.webpackStats.toJson().chunks.reverse().map(a => a.files[0]);

    res.send(`
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularCliExample</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
  <script src="inline.bundle.js"></script>
  <script src="polyfills.bundle.js"></script>
  <script src="styles.bundle.js"></script>
  <script src="vendor.bundle.js"></script>
  <script src="main.bundle.js"></script>
</body>
</html>		
	`);

  });
}
else {
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
