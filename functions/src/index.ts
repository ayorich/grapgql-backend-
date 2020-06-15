import * as functions from 'firebase-functions';
const express = require("express");
const cors = require("cors");
// Constructing a schema, using GraphQL schema language
import typeDefs from "./schema/schema";

// Provide resolver functions for schema fields
import resolvers from "./resolvers/resolvers";

// Create GraphQL express server
const { ApolloServer } = require("apollo-server-express");


const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
});

// Setup express cloud function
const app = express();

app.use(cors({ origin: true }));

let allowCrossDomain = function (req:any, res:any, next:any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
app.use(allowCrossDomain);


server.applyMiddleware({
    app,
    path: "/",
    cors: true
});

exports.graphql = functions.https.onRequest(app);


