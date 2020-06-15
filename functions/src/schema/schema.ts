const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Location {
    lat: Float
    lng: Float
  }
  type Geometry {
    location: Location
  }

  type Data {
    geometry: Geometry
    id: ID!
    name: String
    rating: Float
    user_ratings_total: Float
    vicinity: String
  }

  type Result {
    data: [Data]
    date: Float
    keyword: String
    userID: ID!
    docID: ID!
  }

  type Query {
    results(userID:ID!): [Result]
    datas(docID: ID!): [Result]
  }

  
`;

export default typeDefs;



// geometry:
// icon: String
// id: ID!
// name: String
// opening_hours:
// plus_code:
// rating: Int
// reference: String
// scope: String
// type:
// user_rating_total: Int
// vicinity: String