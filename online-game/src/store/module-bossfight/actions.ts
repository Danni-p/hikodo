/* eslint-disable no-unused-vars */
import { ActionTree, ActionContext } from 'vuex'
import { StateInterface } from '../index'
import { Mutations, MutationTypes } from './mutations'
import { BossfightStateInterface } from './state'

export enum ActionTypes {
  RESET_FIGHT = 'BOSSFIGHT_RESET_FIGHT'
}

// Actions context
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<BossfightStateInterface, StateInterface>, 'commit'>

// Actions contracts
export type Actions = {
  [ActionTypes.RESET_FIGHT] ({ commit, state }: AugmentedActionContext): void
}

// Define actions
export const actions: ActionTree<BossfightStateInterface, StateInterface> & Actions = {
  [ActionTypes.RESET_FIGHT] ({ commit }) {
    commit(MutationTypes.RESET_ATTENDEES, undefined)
    commit(MutationTypes.RESET_HEALERS, undefined)
    commit(MutationTypes.RESET_FIGHT_STATE, undefined)
    commit(MutationTypes.RESET_BOSS_HPS, undefined)
    commit(MutationTypes.RESET_MY_HPS, undefined)
    commit(MutationTypes.RESET_BOSS_MAX_HPS, undefined)
    commit(MutationTypes.RESET_MY_MAX_HPS, undefined)
    commit(MutationTypes.RESET_ATTACK_STATE, undefined)
    commit(MutationTypes.RESET_FORCE, undefined)
    commit(MutationTypes.RESET_SELECTED_ATTACK_TECHNIQUE_ID, undefined)
    commit(MutationTypes.RESET_TOTAL_ATTACK_REPS, undefined)
  }
}
