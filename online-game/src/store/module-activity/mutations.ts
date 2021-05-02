/* eslint-disable no-unused-vars */

import { ActivityWithId } from 'src/models/types/activity'
import { MutationTree } from 'vuex'
import { ActivityStateInterface } from './state'

export enum MutationTypes {
  UPDATE_ACTIVITY = 'ACTIVITY_UPDATE_ACTIVITY',
  ADD_ACTIVITY = 'ACTIVITY_ADD_ACTIVITY',
  DELETE_ACTIVITY = 'ACTIVITY_DELETE_ACTIVITY'
}

// Mutation contracts
export type Mutations<S = ActivityStateInterface> = {
  [MutationTypes.UPDATE_ACTIVITY](state: S, payload: ActivityWithId): void
  [MutationTypes.ADD_ACTIVITY](state: S, payload: ActivityWithId): void
  [MutationTypes.DELETE_ACTIVITY](state: S, payload: ActivityWithId): void
}

// Define mutations
export const mutations: MutationTree<ActivityStateInterface> & Mutations = {
  [MutationTypes.UPDATE_ACTIVITY] (state: ActivityStateInterface, payload: ActivityWithId) {
    const { id, ...act } = payload
    Object.assign(state.activities[id], act)
  },
  [MutationTypes.ADD_ACTIVITY] (state: ActivityStateInterface, payload: ActivityWithId) {
    const { id, ...act } = payload
    state.activities[id] = act
  },
  [MutationTypes.DELETE_ACTIVITY] (state: ActivityStateInterface, payload: ActivityWithId) {
    const { id } = payload
    delete state.activities[id]
  }
}
