import { AttackState, FightState, Technique } from 'src/models/types/bossfight'
import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { BossfightStateInterface } from './state'

export type Getters = {
  getAttendees (state: BossfightStateInterface): number;
  getFightState (state: BossfightStateInterface): FightState;
  getAttackState (state: BossfightStateInterface): AttackState;
  getBossHPs (state: BossfightStateInterface): number;
  getMyHPs (state: BossfightStateInterface): number;
  getBossMaxHPs (state: BossfightStateInterface): number;
  getMyMaxHPs (state: BossfightStateInterface): number;
  getMyTechniques (state: BossfightStateInterface): Technique[];
  getBossTechniques (state: BossfightStateInterface): Technique[];
}

export const getters: GetterTree<BossfightStateInterface, StateInterface> & Getters = {
  getAttendees (state) {
    /* const attendeesLocStore = localStorage.getItem('attendees')
    if (attendeesLocStore) {
      state.attendees = Number.parseInt(attendeesLocStore)
    } */
    return state.attendees
  },

  getFightState (state) {
    /* const fightStateLocStore = localStorage.getItem('fightState')
    if (fightStateLocStore) {
      state.fightState = <FightState>fightStateLocStore
    } */
    return state.fightState
  },

  getAttackState (state) {
    /* const attackStateLocStore = localStorage.getItem('attackState')
    if (attackStateLocStore) {
      state.attackState = <AttackState>attackStateLocStore
    } */
    return state.attackState
  },

  getBossHPs (state) {
    /* if (state.bossHPs >= 0) { */
    return state.bossHPs
    /* }
    const bossHPsLocStore = localStorage.getItem('bossHPs')
    if (bossHPsLocStore) {
      return Number.parseInt(bossHPsLocStore)
    }
    return -1 */
  },

  getMyHPs (state) {
    // if (state.myHPs >= 0) {
    return state.myHPs
    /* }
    const myHPsLocStore = localStorage.getItem('myHPs')
    if (myHPsLocStore) {
      return Number.parseInt(myHPsLocStore)
    }
    return -1 */
  },

  getBossMaxHPs (state) {
    // if (state.bossMaxHPs >= 0) {
    return state.bossMaxHPs
    /* }
    const bossMaxHPsLocStore = localStorage.getItem('bossMaxHPs')
    if (bossMaxHPsLocStore) {
      return Number.parseInt(bossMaxHPsLocStore)
    }
    return -1 */
  },

  getMyMaxHPs (state) {
    // if (state.myMaxHPs >= 0) {
    return state.myMaxHPs
    /* }
    const myMaxHPsLocStore = localStorage.getItem('myMaxHPs')
    if (myMaxHPsLocStore) {
      return Number.parseInt(myMaxHPsLocStore)
    }
    return -1 */
  },

  getMyTechniques (state) {
    return state.myTechniques
  },

  getBossTechniques (state) {
    return state.bossTechniques
  }
}
