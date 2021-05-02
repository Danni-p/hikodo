/* eslint-disable no-unused-vars */
import { ActionTree, ActionContext } from 'vuex'
import { StateInterface } from '../index'
import { Mutations, MutationTypes } from './mutations'
import { FeatureStateInterface } from './state'
import ApiClient from 'src/api-client'
import { FeatureUpdate } from 'src/models/types/feature'

export enum ActionTypes {
  UPDATE_FEATURE = 'FEATURE_UPDATE_FEATURE'
}

// Actions context
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<FeatureStateInterface, StateInterface>, 'commit'>

// Actions contracts
export type Actions = {
  [ActionTypes.UPDATE_FEATURE] ({ commit }: AugmentedActionContext, updateFeature: FeatureUpdate): Promise<void>
}

// Define actions
export const actions: ActionTree<FeatureStateInterface, StateInterface> & Actions = {
  [ActionTypes.UPDATE_FEATURE] ({ commit }, updateFeature: FeatureUpdate) {
    if (updateFeature.name) {
      console.log('action id', updateFeature.id)
      commit(MutationTypes.UPDATE_FEATURE, { id: updateFeature.id, name: updateFeature.name })
    }

    return ApiClient.featureService.updateFeature(updateFeature)
  }
}
