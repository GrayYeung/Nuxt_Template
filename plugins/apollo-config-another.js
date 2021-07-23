import { ApolloLink, concat, split } from 'apollo-link'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default context => {
  return {
    httpEndpoint: process.env.API_ANOTHER_PATH ?? '/graphql-another',
    // 'http://localhost:3000/graphql-another',

    // fix CORS by proxy instead
    fetchOptions: {
      mode: 'cors', //Cors Needed for external Cross origins, need to allow headers from server
    },
    /*
     * For permanent authentication provide `getAuth` function.
     * The string returned will be used in all requests as authorization header
     */
    // getAuth: () => 'Bearer my-static-token',

    // remove __typename when submitting graphql variables
    link: new ApolloLink((operation, forward) => {
      if (operation.variables) {
        const omitTypename = (key, value) => (key === '__typename' ? undefined : value)
        operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename)
      }
      return forward(operation).map(data => {
        return data
      })
    }),
  }
}
