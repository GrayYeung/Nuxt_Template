// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ graphQLErrors, networkError, operation, forward }, nuxtContext) => {
  console.log('Global error handler')
  console.log(
    'graphQLErrors:',
    graphQLErrors,
    'networkError:',
    networkError,
    'operation:',
    operation,
    'forward:',
    forward,
  )
  console.log('nuxtContext:', nuxtContext)
}
