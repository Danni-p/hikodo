import { DefGameState } from 'src/models/types/defense-game'
import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { DefenseGameStateInterface } from './state'

export type Getters = {
  getDefenseGameState (state: DefenseGameStateInterface): DefGameState;
  getDefGameAttendees (state: DefenseGameStateInterface): number;
  getActiveAttendees (state: DefenseGameStateInterface): number;
  getGameOverTime (state: DefenseGameStateInterface): number;
  getDefaultMin (state: DefenseGameStateInterface): number;
  getDefaultSec (state: DefenseGameStateInterface): number;
  getResults (state: DefenseGameStateInterface): number[];
}

export const getters: GetterTree<DefenseGameStateInterface, StateInterface> & Getters = {
  getDefenseGameState (state) {
    return state.defGameState
  },
  getDefGameAttendees (state) {
    return state.defGameAttendees
  },
  getActiveAttendees (state) {
    return state.activeAttendees
  },
  getGameOverTime (state) {
    return state.gameOverTime
  },
  getDefaultMin (state) {
    return state.defaultMin
  },
  getDefaultSec (state) {
    return state.defaultSec
  },
  getResults (state) {
    return state.results
  }
}
