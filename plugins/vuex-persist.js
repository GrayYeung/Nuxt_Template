import VuexPersistence from 'vuex-persist'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      /* your options */
      key: 'example-vuex',
      storage: window.localStorage, // window.sessionStorage,
      reducer: state => ({
        examples: state.examples,
      }),
    }).plugin(store)
  })
}
