import { Feature } from 'src/models/types/feature'
import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { FeatureStateInterface } from './state'

export type Getters = {
  getFeatures (state: FeatureStateInterface): { [key: string]: Feature };
  getDetailsTexts (state: FeatureStateInterface): { [key: string]: string };
}

export const getters: GetterTree<FeatureStateInterface, StateInterface> & Getters = {
  getFeatures (state) {
    return state.features
  },

  getDetailsTexts (state) {
    return state.detailsText
  }
}
