const axios = require('axios');

const api = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
  // timeout: 2000,
});

module.exports = api;
