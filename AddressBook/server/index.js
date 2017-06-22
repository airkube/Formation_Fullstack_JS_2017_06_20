const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));
app.use('/api', cors());

app.use('/api/contacts', contactRoutes);

app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: 'Not Found'
  });
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
