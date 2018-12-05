const { gql } = require('apollo-server');

module.exports = gql`
type Query {
  albums: [Album]!
  comments: [Comment]!
  photos: [Photo]!
  posts: [Post]!
  todos: [Todo]!
  users: [User]!
}

type Album {
  id: ID!
  title: String
  user: User
  photos: [Photo]!
}

type Comment {
  id: ID!
  name: String
  email: String
  body: String
  post: Post
}

type Photo {
  id: ID!
  title: String
  url: String
  thumbnailUrl: String
  album: Album
}

type Post {
  id: ID!
  title: String
  body: String
  user: User
  comments: [Comment]
}

type Todo {
  id: ID!
  title: String
  completed: Boolean
  user: User
}

type User {
  id: ID!
  name: String
  username: String
  email: String
  phone: String
  website: String
  address: Address
  company: Company
  albums: [Album]!
  posts: [Post]!
  todos: [Todo]!
}

type Address {
  street: String
  suite: String
  city: String
  zipcode: String
  geo: GeoLocation
}

type GeoLocation {
  lat: Float
  lng: Float
}

type Company {
  name: String
  catchPhrase: String
  bs: String
}
`;