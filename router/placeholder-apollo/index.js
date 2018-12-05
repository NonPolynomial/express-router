const { Router } = require('express');

const apolloServer = require('./apollo');
const db = require('./db');

const app = Router();

apolloServer(db).applyMiddleware({ app });

module.exports = app;
