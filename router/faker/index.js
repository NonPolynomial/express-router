const { Router } = require('express');
const faker = require('faker');
const _ = require('lodash');

const createCustomer = require('./customer');
const createContract = require('./contract');
const createUser = require('./user');
const createUuid = require('./uuid');

const app = Router();

const respond = data => (req, res) => res.send({ data: typeof data === 'function' ? data() : data });

app.get('/', respond(() => faker.random.number({ min: 0, max: 100 })));

app.get('/customer', respond(() => {
  const info = createCustomer();
  info.contracts = _.times(faker.random.number({ min: 1, max: 5 }), createContract);
  return info;
}));

app.get('/user', respond(createUser));
app.get('/users', respond(() => _.times(faker.random.number({ min: 1, max: 10 }), createUser)));

app.get('/uuid', respond(createUuid));
app.get('/uuids', respond(() => _.times(faker.random.number({ min: 1, max: 20 }), createUuid)));

module.exports = app;
