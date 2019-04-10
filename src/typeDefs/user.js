import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    me: User
  }

  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    signUp(email: String!, password: String!): User
    signIn(email: String!, password: String!): User
    signOut: Boolean
  }

  type User {
    id: ID!
    email: String!
  }
`;