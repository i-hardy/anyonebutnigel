const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    isNigel(postcode: String!): Boolean
  }
`;
