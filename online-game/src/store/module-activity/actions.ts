/* eslint-disable no-unused-vars */
import { ActionTree, ActionContext } from 'vuex'
import { StateInterface } from '../index'
import { Mutations } from './mutations'
import { ActivityStateInterface } from './state'
import ApiClient from 'src/api-client'
import { Activity } from 'src/models/types/activity'

export enum ActionTypes {
  ADD_ACTIVITY = 'ACTIVITY_ADD_ACTIVITY',
  REMOVE_ALL_ACTIVITIES = 'ACTIVITY_REMOVE_ALL_ACTIVITIES'
}

// Actions context
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<ActivityStateInterface, StateInterface>, 'commit'>

// Actions contracts
export type Actions = {
  [ActionTypes.ADD_ACTIVITY] ({ commit, state }: AugmentedActionContext, acvtivity: Activity): Promise<void>
  [ActionTypes.REMOVE_ALL_ACTIVITIES] ({ commit, state }: AugmentedActionContext): Promise<void>
}

// Define actions
export const actions: ActionTree<ActivityStateInterface, StateInterface> & Actions = {
  async [ActionTypes.ADD_ACTIVITY] ({ state }, activity: Activity) {
    const nrOfActivities = Object.keys(state.activities).length
    if (nrOfActivities >= state.maxNrOfActivities) {
      await ApiClient.activityService.updateOldestActivity(activity)
    } else {
      await ApiClient.activityService.addActivity(activity)
    }
  },
  async [ActionTypes.REMOVE_ALL_ACTIVITIES] () {
    await ApiClient.activityService.deleteAllActivities()
  }
}
