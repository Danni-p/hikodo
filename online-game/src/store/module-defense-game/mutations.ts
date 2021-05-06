/* eslint-disable no-unused-vars */

import { DefGameState } from 'src/models/types/defense-game'
import { MutationTree } from 'vuex'
import { DefenseGameStateInterface } from './state'

export enum MutationTypes {
  SET_DEFENSE_GAME_STATE = 'DEFENSE_GAME_SET_DEFENSE_GAME_STATE',
  SET_DEF_GAME_ATTENDEES = 'DEFENSE_GAME_SET_DEF_GAME_ATTENDEES',
  SET_ACTIVE_ATTENDEES = 'DEFENSE_GAME_SET_ACTIVE_ATTENDEES',
  SET_GAME_OVER_TIME = 'DEFENSE_GAME_SET_GAME_OVER_TIME',
  SET_DEFAULT_MIN = 'DEFENSE_GAME_SET_DEFAULT_MIN',
  SET_DEFAULT_SEC = 'DEFENSE_GAME_SET_DEFAULT_SEC',

  ADD_RESULT = 'DEFENSE_GAME_ADD_RESULT',
  REMOVE_RESULT = 'DEFENSE_GAME_REMOVE_RESULT',
  CLEAR_RESULTS = 'DEFENSE_GAME_CLEAR_RESULTS',

  RESET_DEF_GAME_ATTENDEES = 'DEFENSE_GAME_RESET_DEF_GAME_ATTENDEES',
  RESET_DEFENSE_GAME_STATE = 'DEFENSE_GAME_RESET_DEFENSE_GAME_STATE',
  RESET_ACTIVE_ATTENDEES = 'DEFENSE_GAME_RESET_ACTIVE_ATTENDEES',
  RESET_GAME_OVER_TIME = 'DEFENSE_GAME_RESET_GAME_OVER_TIME',
  RESET_DEFAULT_MIN = 'DEFENSE_GAME_RESET_DEFAULT_MIN',
  RESET_DEFAULT_SEC = 'DEFENSE_GAME_RESET_DEFAULT_SEC',
}

// Mutation contracts
export type Mutations<S = DefenseGameStateInterface> = {
  [MutationTypes.SET_DEFENSE_GAME_STATE](state: S, payload: DefGameState): void
  [MutationTypes.SET_DEF_GAME_ATTENDEES](state: S, payload: number): void
  [MutationTypes.SET_ACTIVE_ATTENDEES](state: S, payload: number): void
  [MutationTypes.SET_GAME_OVER_TIME](state: S, payload: number): void
  [MutationTypes.SET_DEFAULT_MIN](state: S, payload: number): void
  [MutationTypes.SET_DEFAULT_SEC](state: S, payload: number): void

  [MutationTypes.ADD_RESULT](state: S, payload: number): void
  [MutationTypes.REMOVE_RESULT](state: S, payload: number): void
  [MutationTypes.CLEAR_RESULTS](state: S): void

  [MutationTypes.RESET_DEF_GAME_ATTENDEES](state: S): void
  [MutationTypes.RESET_DEFENSE_GAME_STATE](state: S): void
  [MutationTypes.RESET_ACTIVE_ATTENDEES](state: S): void
  [MutationTypes.RESET_GAME_OVER_TIME](state: S): void
  [MutationTypes.RESET_DEFAULT_MIN](state: S): void
  [MutationTypes.RESET_DEFAULT_SEC](state: S): void
}

// Define mutations
export const mutations: MutationTree<DefenseGameStateInterface> & Mutations = {
  [MutationTypes.RESET_DEFENSE_GAME_STATE] (state: DefenseGameStateInterface) {
    localStorage.removeItem('defenseGameState')
    state.defGameState = DefGameState.UNKNOWN
  },
  [MutationTypes.RESET_DEF_GAME_ATTENDEES] (state: DefenseGameStateInterface) {
    localStorage.removeItem('defGameAttendees')
    state.defGameAttendees = 0
  },
  [MutationTypes.RESET_ACTIVE_ATTENDEES] (state: DefenseGameStateInterface) {
    state.activeAttendees = 0
  },
  [MutationTypes.RESET_GAME_OVER_TIME] (state: DefenseGameStateInterface) {
    state.gameOverTime = 0
  },
  [MutationTypes.RESET_DEFAULT_MIN] (state: DefenseGameStateInterface) {
    state.defaultMin = 10
  },
  [MutationTypes.RESET_DEFAULT_SEC] (state: DefenseGameStateInterface) {
    state.defaultSec = 0
  },

  [MutationTypes.SET_DEFENSE_GAME_STATE] (state: DefenseGameStateInterface, payload: DefGameState) {
    state.defGameState = payload
    localStorage.setItem('defenseGameState', payload)
  },
  [MutationTypes.SET_DEF_GAME_ATTENDEES] (state: DefenseGameStateInterface, payload: number) {
    state.defGameAttendees = payload
    localStorage.setItem('defGameAttendees', payload.toString())
  },
  [MutationTypes.SET_ACTIVE_ATTENDEES] (state: DefenseGameStateInterface, payload: number) {
    state.activeAttendees = payload
  },
  [MutationTypes.SET_GAME_OVER_TIME] (state: DefenseGameStateInterface, payload: number) {
    state.gameOverTime = payload
  },
  [MutationTypes.SET_DEFAULT_MIN] (state: DefenseGameStateInterface, payload: number) {
    state.defaultMin = payload
  },
  [MutationTypes.SET_DEFAULT_SEC] (state: DefenseGameStateInterface, payload: number) {
    state.defaultSec = payload
  },

  [MutationTypes.ADD_RESULT] (state: DefenseGameStateInterface, payload: number) {
    state.results.push(payload)
  },
  [MutationTypes.REMOVE_RESULT] (state: DefenseGameStateInterface, payload: number) {
    const idx = state.results.indexOf(payload)
    if (idx >= 0) {
      state.results.splice(idx, 1)
    }
  },
  [MutationTypes.CLEAR_RESULTS] (state: DefenseGameStateInterface) {
    while (state.results.length > 0) {
      state.results.pop()
    }
  }
}
