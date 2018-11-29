const express = require('express');

const apollo = require('./router/placeholder-apollo');

const app = express();

app.use('/apollo', apollo);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(9001);
