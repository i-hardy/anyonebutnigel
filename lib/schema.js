const { gql } = require('apollo-server');

module.exports = gql`
  type PollingStation {
    address: String
    postcode: String
  }
  type Council {
    name: String
    website: String
  }
  type VoterInfo {
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
