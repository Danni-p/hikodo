import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { AuthStateInterface } from './state'

export type Getters = {
  isAuthenticated (state: AuthStateInterface): boolean;
}

export const getters: GetterTree<AuthStateInterface, StateInterface> & Getters = {
  isAuthenticated (state) {
    return state.authenticated
  }
}
