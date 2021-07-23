import { AnotherState, RootState } from '~/store/types'
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex'

// Nuxt will generate another vuex store
type AnotherContext = ActionContext<AnotherState, RootState>

export const state = (): AnotherState => ({
  anything: 'anything',
})

export const getters: GetterTree<AnotherState, RootState> = {}

export const mutations: MutationTree<AnotherState> = {}

export const actions: ActionTree<AnotherState, RootState> = {}
