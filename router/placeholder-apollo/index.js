const { Router } = require('express');
const { ApolloServer } = require('apollo-server-express');

const db = require('./data');

const app = Router();

const typeDefs = require('./typeDefs');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      albums: () => db.get('albums').value(),
      comments: () => db.get('comments').value(),
      photos: () => db.get('photos').value(),
      posts: () => db.get('posts').value(),
      todos: () => db.get('todos').value(),
      users: () => db.get('users').value(),
    },
    Album: {
      photos: ({ id }) => db.get('photos').filter({ albumId: Number(id) }).value(),
      user: ({ userId }) => db.get('users').find({ id: userId }).value(),
    },
    Comment: {
      post: ({ postId }) => db.get('posts').find({ id: postId }).value(),
    },
    Photo: {
      album: ({ albumId }) => db.get('albums').find({ id: albumId }).value(),
    },
    Post: {
      comments: ({ id }) => db.get('comments').filter({ postId: Number(id) }).value(),
      user: ({ userId }) => db.get('users').find({ id: userId }).value(),
    },
    Todo: {
      user: ({ userId }) => db.get('users').find({ id: userId }).value(),
    },
    User: {
      albums: ({ id }) => db.get('albums').filter({ userId: Number(id) }).value(),
      posts: ({ id }) => db.get('posts').filter({ userId: Number(id) }).value(),
      todos: ({ id }) => db.get('todos').filter({ userId: Number(id) }).value(),
    },
  }
});

server.applyMiddleware({ app });

module.exports = app;
