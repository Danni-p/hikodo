import { AttackState, FightState, Technique } from 'src/models/types/bossfight'
import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { BossfightStateInterface } from './state'

export type Getters = {
  getAttendees (state: BossfightStateInterface): number;
  getHealers (state: BossfightStateInterface): number;
  getFightState (state: BossfightStateInterface): FightState;
  getAttackState (state: BossfightStateInterface): AttackState;
  getBossHPs (state: BossfightStateInterface): number;
  getMyHPs (state: BossfightStateInterface): number;
  getBossMaxHPs (state: BossfightStateInterface): number;
  getMyMaxHPs (state: BossfightStateInterface): number;
  getMyTechniques (state: BossfightStateInterface): Technique[];
  getBossTechniques (state: BossfightStateInterface): Technique[];
  getForce (state: BossfightStateInterface): number;
  getSelectedAttackTechniqueId (state: BossfightStateInterface): string;
  getTotalAttackReps (state: BossfightStateInterface): number;
  getAttackCycles (state: BossfightStateInterface): number;
}

export const getters: GetterTree<BossfightStateInterface, StateInterface> & Getters = {
  getAttendees (state) {
    return state.attendees
  },

  getHealers (state) {
    return state.healers
  },

  getFightState (state) {
    return state.fightState
  },

  getAttackState (state) {
    return state.attackState
  },

  getBossHPs (state) {
    return state.bossHPs
  },

  getMyHPs (state) {
    return state.myHPs
  },

  getBossMaxHPs (state) {
    return state.bossMaxHPs
  },

  getMyMaxHPs (state) {
    return state.myMaxHPs
  },

  getMyTechniques (state) {
    return state.myTechniques
  },

  getBossTechniques (state) {
    return state.bossTechniques
  },

  getForce (state) {
    return state.force
  },

  getSelectedAttackTechniqueId (state) {
    return state.selectedAttackTechniqueId
  },
  getTotalAttackReps (state) {
    return state.totalAttackReps
  },
  getAttackCycles (state) {
    return state.attackCycles
  }
}
