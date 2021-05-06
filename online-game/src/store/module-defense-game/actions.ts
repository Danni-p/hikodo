/* eslint-disable no-unused-vars */
import { ActionTree, ActionContext } from 'vuex'
import { StateInterface } from '../index'
import { Mutations, MutationTypes } from './mutations'
import { DefenseGameStateInterface } from './state'

export enum ActionTypes {
  RESET_DEFENSE_GAME = 'BOSSFIGHT_RESET_DEFENSE_GAME'
}

// Actions context
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<DefenseGameStateInterface, StateInterface>, 'commit'>

// Actions contracts
export type Actions = {
  [ActionTypes.RESET_DEFENSE_GAME] ({ commit, state }: AugmentedActionContext): void
}

// Define actions
export const actions: ActionTree<DefenseGameStateInterface, StateInterface> & Actions = {
  [ActionTypes.RESET_DEFENSE_GAME] ({ commit }) {
    commit(MutationTypes.RESET_DEFENSE_GAME_STATE, undefined)
    commit(MutationTypes.RESET_DEF_GAME_ATTENDEES, undefined)
    commit(MutationTypes.RESET_ACTIVE_ATTENDEES, undefined)
    commit(MutationTypes.RESET_GAME_OVER_TIME, undefined)
    commit(MutationTypes.RESET_DEFAULT_MIN, undefined)
    commit(MutationTypes.RESET_DEFAULT_SEC, undefined)
    commit(MutationTypes.CLEAR_RESULTS, undefined)
  }
}
