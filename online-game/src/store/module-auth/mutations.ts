/* eslint-disable no-unused-vars */

import { MutationTree } from 'vuex'
import { AuthStateInterface } from './state'

export enum MutationTypes {
  SET_USER_AUTHENTICATED = 'AUTH_SET_USER_AUTHENTICATED'
}

// Mutation contracts
export type Mutations<S = AuthStateInterface> = {
  [MutationTypes.SET_USER_AUTHENTICATED](state: S, flag: boolean): void
}

// Define mutations
export const mutations: MutationTree<AuthStateInterface> & Mutations = {
  [MutationTypes.SET_USER_AUTHENTICATED] (state: AuthStateInterface, flag: boolean) {
    state.authenticated = flag
  }
}
