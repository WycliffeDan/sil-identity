const express = require('express');
const path = require('path');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

const port = 3000;
app.listen(port, '0.0.0.0', function() {
  console.log(`sil-identity listening on port ${port}!`);
});
