const path = require('path');

const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const api = require('./api');

const file = new FileSync(path.resolve(__dirname, 'data', 'storage.json'));
const db = lowdb(file);

db.defaults({
  albums: [],
  comments: [],
  photos: [],
  posts: [],
  todos: [],
  users: [],
}).write();

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
