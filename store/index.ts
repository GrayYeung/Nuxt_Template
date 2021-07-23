import { RootState } from '~/store/types'
import { Example, GetAllExamplesDocument, Role } from '~/gen/composition'
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'

// root store
type RootContext = ActionContext<RootState, RootState>

export const state = (): RootState => ({
  examples: [] as Example[],
})

export const getters: GetterTree<RootState, RootState> = {
  getAllKeywords: (state: RootState): (string | null | undefined)[] => {
    return state.examples.flatMap((e: Example) => e.keywords)
  },

  getAllKeywordsByRole:
    (state: RootState) =>
    (role: Role): (string | null | undefined)[] => {
      return state.examples.flatMap((e: Example) => {
        return e.role === role ? e.keywords : []
      })
    },
}

export const mutations: MutationTree<RootState> = {
  setExamples: (state: RootState, payload: Example[]) => {
    state.examples = payload
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchAllExamples(context: RootContext) {
    // @ts-ignore
    const client = this.app.apolloProvider.defaultClient
    // or if using other client: this.app.apolloProvider.client.another
    const response = await client.query({
      query: GetAllExamplesDocument,
      fetchPolicy: 'no-cache',
    })
    context.commit('setExamples', response.data.allExamples)
  },

  clearAllExamples: (context: RootContext) => {
    context.commit('setExamples', [])
  },
}
