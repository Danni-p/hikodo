/* eslint-disable no-unused-vars */
import { ActionTree, ActionContext } from 'vuex'
import { StateInterface } from '../index'
import { Mutations } from './mutations'
import { ProfileStateInterface } from './state'
import ApiClient from 'src/api-client'
import { FeatureType } from 'src/models/types/feature'

export enum ActionTypes {
  SET_SKILL_LEVEL = 'PROFILE_SET_SKILL_LEVEL',
  SET_SKILL_BOOST = 'PROFILE_SET_SKILL_BOOST',
}

// Actions context
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<ProfileStateInterface, StateInterface>, 'commit'>

// Actions contracts
export type Actions = {
  [ActionTypes.SET_SKILL_LEVEL] ({ commit, state }: AugmentedActionContext, payload: {id: FeatureType, level: number}): Promise<void>
  [ActionTypes.SET_SKILL_BOOST] ({ commit, state }: AugmentedActionContext, payload: {id: FeatureType, boost: number}): Promise<void>
}

// Define actions
export const actions: ActionTree<ProfileStateInterface, StateInterface> & Actions = {
  async [ActionTypes.SET_SKILL_LEVEL] (__, payload: {id: FeatureType, level: number}) {
    await ApiClient.profileService.setSkillLevel(payload.id, payload.level)
  },
  async [ActionTypes.SET_SKILL_BOOST] (__, payload: {id: FeatureType, boost: number}) {
    await ApiClient.profileService.setSkillBoost(payload.id, payload.boost)
  }
}
