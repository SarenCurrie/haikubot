const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');
const { HaikuType } = require('./schema/types/HaikuType');
const { HaikuInput } = require('./schema/inputs/HaikuInput');

// Define the Query type
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getHaiku: {
      type: HaikuType,
      args: {
        serverId: { type: GraphQLString },
        id: { type: GraphQLString },
      },
      resolve: (_, { serverId, id }, context) => context.repo.getHaiku(serverId, id),
    },

    searchHaikus: {
      type: new GraphQLList(HaikuType),
      args: {
        keywords: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
      },
      resolve: (_, { keywords }, context) => context.repo.searchHaikus(keywords),
    },
  },
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createHaiku: {
      type: HaikuType,
      args: {
        haikuInput: { type: HaikuInput },
      },
      resolve: (_, { haikuInput }, context) => context.repo.createHaiku(haikuInput),
    },
  },
});

const schema = new GraphQLSchema({ query: queryType, mutation: mutationType });

exports.schema = schema;
