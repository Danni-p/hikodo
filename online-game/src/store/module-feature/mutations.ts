/* eslint-disable no-unused-vars */

import { FeatureWithId, FeatureUpdate } from 'src/models/types/feature'
import { MutationTree } from 'vuex'
import { FeatureStateInterface } from './state'

export enum MutationTypes {
  UPDATE_FEATURE = 'FEATURE_UPDATE_FEATURE',
  ADD_FEATURE = 'FEATURE_ADD_FEATURE',
}

// Mutation contracts
export type Mutations<S = FeatureStateInterface> = {
  [MutationTypes.UPDATE_FEATURE](state: S, payload: FeatureUpdate): void
  [MutationTypes.ADD_FEATURE](state: S, payload: FeatureWithId): void
}

// Define mutations
export const mutations: MutationTree<FeatureStateInterface> & Mutations = {
  [MutationTypes.UPDATE_FEATURE] (state: FeatureStateInterface, payload: FeatureUpdate) {
    const { id, ...feat } = payload
    Object.assign(state.features[id], feat)
  },
  [MutationTypes.ADD_FEATURE] (state: FeatureStateInterface, payload: FeatureWithId) {
    const { id, ...feat } = payload
    state.features[id] = feat
  }
}
