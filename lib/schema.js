const { gql } = require('apollo-server');

module.exports = gql`
  type PollingStation {
    address: String
    postcode: String
    lat: String
    long: String
  }
  type Council {
    name: String
    website: String
    email: String
    phone: String
  }
  type VoterInfo {
    lat: String
    long: String
    council: Council
    pollingStation: PollingStation
  }
  type MEP {
    name: String
    party: String
  }
  type Region {
    name: String
    postcode: String
    isNigel: Boolean
    MEPs: [MEP]
    voterInfo: VoterInfo
  }
  type Query {
    region(postcode: String!): Region
    voterInfo(postcode: String!): VoterInfo
  }
`;
