/* eslint-disable no-unused-vars */
import { ActionTree, ActionContext } from 'vuex'
import { StateInterface } from '../index'
import { Mutations } from './mutations'
import { AuthStateInterface } from './state'
import ApiClient from 'src/api-client'
import firebase from 'firebase'

export enum ActionTypes {
  LOGOUT = 'AUTH_LOGOUT',
  LOGIN = 'AUTH_LOGIN'
}

// Actions context
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<AuthStateInterface, StateInterface>, 'commit'>

// Actions contracts
export type Actions = {
  [ActionTypes.LOGOUT] ({ commit }: AugmentedActionContext): Promise<void>
  [ActionTypes.LOGIN] ({ commit }: AugmentedActionContext, password: string): Promise<firebase.auth.UserCredential>

}

// Define actions
export const actions: ActionTree<AuthStateInterface, StateInterface> & Actions = {
  [ActionTypes.LOGOUT] () {
    return ApiClient.authService.logoutUser()
  },
  [ActionTypes.LOGIN] (__, password: string) {
    return ApiClient.authService.loginUserWithPassword(password)
  }
}
