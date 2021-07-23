import 'reflect-metadata'
import { ReturnModelType } from '@typegoose/typegoose/lib/types'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import Koa, { Context, Request, Response } from 'koa'
import mongoose from 'mongoose'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
import { mergeResolvers } from '@graphql-tools/merge'
import { initExampleDatabase } from './backend/service/exampleService'
import { ExampleEntity } from './backend/entities'
import { Resolvers, UserResponse } from './gen/types'
import { getOptimisticModel } from './backend/core'
import { ExampleResolver } from './backend/resovlers'

/** mongodb connection **/
mongoose.connect(process.env.MONGO_DB_URL ?? '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

export const db = mongoose
db.connection.on('error', console.error.bind(console, 'connection error:'))
db.connection.once('open', () => console.log('Database connected.'))

initExampleDatabase()

/** graphql **/
const app = new Koa()

export interface GraphQLContext {
  db: {
    exampleEntity: ReturnModelType<typeof ExampleEntity, any>
  }
  user: UserResponse
}

const schema = loadSchemaSync('./server-middleware/graphql/schema/**/*.graphql', {
  // load from a single schema file
  loaders: [new GraphQLFileLoader()],
})
const resolversArray: Resolvers<GraphQLContext>[] = [ExampleResolver]
const resolvers = mergeResolvers(resolversArray as any)
const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers: resolvers as any,
})
app.listen(process.env.GRAPHQL_PORT)

app.use(async (ctx: any, next: any) => {
  // do some middleware service here

  // e.g.: decode user
  const handcodeExampleResponse = {
    name: 'UserA',
    isAdmin: true,
  }
  ctx.user = handcodeExampleResponse

  await next()
})

app.use(
  mount(
    '/graphql',
    graphqlHTTP((request: Request, response: Response, ctx: Context) => {
      return {
        schema: schemaWithResolvers,
        graphiql: true,
        context: {
          db: {
            exampleEntity: getOptimisticModel(ExampleEntity),
          },
          user: ctx.user,
        } as GraphQLContext,
      }
    }),
  ),
)

module.exports = {
  // path: '/api',
  handler: app,
}
