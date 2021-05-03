import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module
} from 'vuex'
import { StateInterface } from '../index'
import state, { ProfileStateInterface } from './state'
import { actions, Actions } from './actions'
import { getters, Getters } from './getters'
import { mutations, Mutations } from './mutations'

// setup store type
export type Store<S = ProfileStateInterface> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>
}

export const profileModule: Module<ProfileStateInterface, StateInterface> = {
  actions,
  getters,
  mutations,
  state
}