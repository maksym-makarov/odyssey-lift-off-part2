export const typeDefs = `#graphql
    type Query {
        # query to get tracks array for the Home page
        tracksForHome: [Track!]!
    }
    # Track type
    type Track {
        id: ID!
        # the track's title
        title: String!
        # the track's author
        author: Author!
        # a link to the track's img
        thumbnail: String
        # the track's approx. length to complete, in minutes
        length: Int
        # the number of modules this track contains
        modulesCount: Int
    }
    # Author of a complete track
    type Author {
        id: ID!
        # author's name and surname
        name: String!
        # author's profile picture url
        photo: String
    }
`;
