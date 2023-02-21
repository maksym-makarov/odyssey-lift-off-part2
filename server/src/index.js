const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");
const axios = require("axios");

const baseUrl =
  process.env.API_URL ?? "https://odyssey-lift-off-rest-api.herokuapp.com";

const resolvers = {
  Query: {
    tracksForHome: async () => {
      const { data: tracks } = await axios.get(`${baseUrl}/tracks`);

      // tracksWithAuthors
      return tracks.map(async ({ id, title, authorId, thumbnail }) => {
        const { data: author } = await axios.get(
          `${baseUrl}/author/${authorId}`
        );

        return {
          id,
          title,
          author,
          thumbnail,
        };
      });
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// run server
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => console.log(`🚀  Server ready at: ${url}`));
