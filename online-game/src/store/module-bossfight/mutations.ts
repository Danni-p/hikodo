/* eslint-disable no-unused-vars */

import { AttackState, FightState } from 'src/models/types/bossfight'
import { MutationTree } from 'vuex'
import { BossfightStateInterface } from './state'

export enum MutationTypes {
  SET_ATTENDEES = 'BOSSFIGHT_SET_ATTENDEES',
  SET_FIGHT_STATE = 'BOSSFIGHT_SET_FIGHT_STATE',
  SET_ATTACK_STATE = 'BOSSFIGHT_SET_ATTACK_STATE',
  SET_BOSS_HPS = 'BOSSFIGHT_SET_BOSS_HPS',
  SET_MY_HPS = 'BOSSFIGHT_SET_MY_HPS',
  SET_BOSS_MAX_HPS = 'BOSSFIGHT_SET_BOSS_MAX_HPS',
  SET_MY_MAX_HPS = 'BOSSFIGHT_SET_MY_MAX_HPS',

  RESET_ATTENDEES = 'BOSSFIGHT_RESET_ATTENDEES',
  RESET_FIGHT_STATE = 'BOSSFIGHT_RESET_FIGHT_STATE',
  RESET_ATTACK_STATE = 'BOSSFIGHT_RESET_ATTACK_STATE',
  RESET_BOSS_HPS= 'BOSSFIGHT_RESET_BOSS_HPS',
  RESET_MY_HPS = 'BOSSFIGHT_RESET_MY_HPS',
  RESET_BOSS_MAX_HPS= 'BOSSFIGHT_RESET_BOSS_MAX_HPS',
  RESET_MY_MAX_HPS = 'BOSSFIGHT_RESET_MY_MAX_HPS'
}

// Mutation contracts
export type Mutations<S = BossfightStateInterface> = {
  [MutationTypes.SET_ATTENDEES](state: S, payload: number): void
  [MutationTypes.SET_FIGHT_STATE](state: S, payload: FightState): void
  [MutationTypes.SET_ATTACK_STATE](state: S, payload: AttackState): void
  [MutationTypes.SET_BOSS_HPS](state: S, payload: number): void
  [MutationTypes.SET_MY_HPS](state: S, payload: number): void
  [MutationTypes.SET_BOSS_MAX_HPS](state: S, payload: number): void
  [MutationTypes.SET_MY_MAX_HPS](state: S, payload: number): void

  [MutationTypes.RESET_ATTENDEES](state: S): void
  [MutationTypes.RESET_FIGHT_STATE](state: S): void
  [MutationTypes.RESET_ATTACK_STATE](state: S): void
  [MutationTypes.RESET_BOSS_HPS](state: S): void
  [MutationTypes.RESET_MY_HPS](state: S): void
  [MutationTypes.RESET_BOSS_MAX_HPS](state: S): void
  [MutationTypes.RESET_MY_MAX_HPS](state: S): void
}

// Define mutations
export const mutations: MutationTree<BossfightStateInterface> & Mutations = {
  [MutationTypes.SET_ATTENDEES] (state: BossfightStateInterface, payload: number) {
    state.attendees = payload
    localStorage.setItem('attendees', payload.toString())
  },
  [MutationTypes.SET_FIGHT_STATE] (state: BossfightStateInterface, payload: FightState) {
    state.fightState = payload
    localStorage.setItem('fightState', payload)
  },
  [MutationTypes.SET_ATTACK_STATE] (state: BossfightStateInterface, payload: AttackState) {
    state.attackState = payload
    localStorage.setItem('attackState', payload)
  },
  [MutationTypes.SET_BOSS_HPS] (state: BossfightStateInterface, payload: number) {
    state.bossHPs = payload
    localStorage.setItem('bossHPs', payload.toString())
  },
  [MutationTypes.SET_MY_HPS] (state: BossfightStateInterface, payload: number) {
    state.myHPs = payload
    localStorage.setItem('myHPs', payload.toString())
  },
  [MutationTypes.SET_BOSS_MAX_HPS] (state: BossfightStateInterface, payload: number) {
    state.bossMaxHPs = payload
    localStorage.setItem('bossMaxHPs', payload.toString())
  },
  [MutationTypes.SET_MY_MAX_HPS] (state: BossfightStateInterface, payload: number) {
    state.myMaxHPs = payload
    localStorage.setItem('myMaxHPs', payload.toString())
  },

  [MutationTypes.RESET_ATTENDEES] (state: BossfightStateInterface) {
    localStorage.removeItem('attendees')
    state.attendees = 0
  },
  [MutationTypes.RESET_FIGHT_STATE] (state: BossfightStateInterface) {
    localStorage.removeItem('fightState')
    state.fightState = FightState.UNKNOWN
  },
  [MutationTypes.RESET_ATTACK_STATE] (state: BossfightStateInterface) {
    localStorage.removeItem('attackState')
    state.attackState = AttackState.UNKNOWN
  },
  [MutationTypes.RESET_BOSS_HPS] (state: BossfightStateInterface) {
    localStorage.removeItem('bossHPs')
    state.bossHPs = -1
  },
  [MutationTypes.RESET_MY_HPS] (state: BossfightStateInterface) {
    localStorage.removeItem('myHPs')
    state.myHPs = -1
  },
  [MutationTypes.RESET_BOSS_MAX_HPS] (state: BossfightStateInterface) {
    localStorage.removeItem('bossMaxHPs')
    state.bossMaxHPs = -1
  },
  [MutationTypes.RESET_MY_MAX_HPS] (state: BossfightStateInterface) {
    localStorage.removeItem('myMaxHPs')
    state.myMaxHPs = -1
  }
}
