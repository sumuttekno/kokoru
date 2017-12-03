import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    _id: {
      type: GraphQLID
    }
  }
});
