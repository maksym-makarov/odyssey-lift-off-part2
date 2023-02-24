import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema.js";
import { TracksAPI } from "./datasources/tracks-api.js";

const baseUrl =
  process.env.API_URL ?? "https://odyssey-lift-off-rest-api.herokuapp.com/";

const api = new TracksAPI(baseUrl);

const resolvers = {
  Query: {
    tracksForHome: api.getTracksForHome,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
