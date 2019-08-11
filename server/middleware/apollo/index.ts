import {ApolloServer} from "apollo-server-express"

import models from "../../model"
import {resolvers} from "../../resolvers"
import {typeDefs} from "../../typeDefs"

export default new ApolloServer({
  typeDefs,
  resolvers,
  context: {models}
})
