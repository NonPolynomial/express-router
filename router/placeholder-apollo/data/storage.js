const path = require('path');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const file = new FileSync(path.resolve(__dirname, 'storage.json'));

const db = lowdb(file);

db.defaults({
  albums: [],
  comments: [],
  photos: [],
  posts: [],
  todos: [],
  users: [],
}).write();

module.exports = db;
