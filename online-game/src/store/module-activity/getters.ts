import { Activity } from 'src/models/types/activity'
import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ActivityStateInterface } from './state'

export type Getters = {
  getActivities (state: ActivityStateInterface): { [key: string]: Activity };
}

export const getters: GetterTree<ActivityStateInterface, StateInterface> & Getters = {
  getActivities (state) {
    return state.activities
  }
}
