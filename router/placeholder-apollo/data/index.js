const api = require('./api');
const db = require('./storage');

const lastUpdated = db.get('initialized').value();

const request = (table) =>
  api.get(`/${table}`)
    .then(({ data }) => data)
    .catch(() => [])
    .then((data) => {
      db.set(table, data).write();
    });

const initialize = () => {
  Promise.all([
    request('albums'),
    request('comments'),
    request('photos'),
    request('posts'),
    request('todos'),
    request('users'),
  ])
    .then(() => {
      console.log('db has initialized!');
    });
};

setInterval(() => {
  initialize();
}, 1000 * 60 * 30);

initialize();

module.exports = db;
