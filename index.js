const express = require('express');

const faker = require('./router/faker');
const placeholderApollo = require('./router/placeholder-apollo');

const app = express();

app.use('/fake', faker);
app.use('/placeholder', placeholderApollo);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(9001);
