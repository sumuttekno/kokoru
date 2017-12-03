import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    _id: {type: GraphQLID},
    username: {type: GraphQLString},
    password: {type: GraphQLString}
  }
});
