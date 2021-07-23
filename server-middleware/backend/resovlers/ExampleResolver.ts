import { GraphQLContext } from '../../server'
import { Example, Resolvers } from '../../gen/types'
import { getExamples } from '../service/exampleService'

export const ExampleResolver: Resolvers<GraphQLContext> = {
  Query: {
    allExamples: async (parent, args, context, info): Promise<Example[]> => {
      // Alternative: access db by context.db.xxxEntity
      return await getExamples()
    },
  },
}
