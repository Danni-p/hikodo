/* eslint-disable no-unused-vars */

import { AttackState, DefenseState, FightState } from 'src/models/types/bossfight'
import { MutationTree } from 'vuex'
import { BossfightStateInterface } from './state'

export enum MutationTypes {
  SET_ATTENDEES = 'BOSSFIGHT_SET_ATTENDEES',
  SET_HEALERS = 'BOSSFIGHT_SET_HEALERS',
  SET_FIGHT_STATE = 'BOSSFIGHT_SET_FIGHT_STATE',
  SET_ATTACK_STATE = 'BOSSFIGHT_SET_ATTACK_STATE',
  SET_DEFENSE_STATE = 'BOSSFIGHT_SET_DEFENSE_STATE',
  SET_BOSS_HPS = 'BOSSFIGHT_SET_BOSS_HPS',
  SET_MY_HPS = 'BOSSFIGHT_SET_MY_HPS',
  SET_BOSS_MAX_HPS = 'BOSSFIGHT_SET_BOSS_MAX_HPS',
  SET_MY_MAX_HPS = 'BOSSFIGHT_SET_MY_MAX_HPS',
  SET_FORCE = 'BOSSFIGHT_SET_FORCE',
  SET_SELECTED_ATTACK_TECHNIQUE_ID = 'BOSSFIGHT__SET_SELECTED_ATTACK_TECHNIQUE_ID',
  SET_TOTAL_ATTACK_REPS = 'BOSSFIGHT_SET_TOTAL_ATTACK_REPS',
  SET_ATTACK_CYCLES = 'BOSSFIGHT_SET_ATTACK_CYCLES',
  SET_DEFENSE_FAILES = 'BOSSFIGHT_SET_DEFENSE_FAILES',

  RESET_ATTENDEES = 'BOSSFIGHT_RESET_ATTENDEES',
  RESET_HEALERS = 'BOSSFIGHT_RESET_HEALERS',
  RESET_FIGHT_STATE = 'BOSSFIGHT_RESET_FIGHT_STATE',
  RESET_ATTACK_STATE = 'BOSSFIGHT_RESET_ATTACK_STATE',
  RESET_DEFENSE_STATE = 'BOSSFIGHT_RESET_DEFENSE_STATE',
  RESET_BOSS_HPS= 'BOSSFIGHT_RESET_BOSS_HPS',
  RESET_MY_HPS = 'BOSSFIGHT_RESET_MY_HPS',
  RESET_BOSS_MAX_HPS= 'BOSSFIGHT_RESET_BOSS_MAX_HPS',
  RESET_MY_MAX_HPS = 'BOSSFIGHT_RESET_MY_MAX_HPS',
  RESET_FORCE = 'BOSSFIGHT_RESET_FORCE',
  RESET_SELECTED_ATTACK_TECHNIQUE_ID = 'BOSSFIGHT_RESET_SELECTED_ATTACK_TECHNIQUE_ID',
  RESET_TOTAL_ATTACK_REPS = 'BOSSFIGHT_RESET_TOTAL_ATTACK_REPS',
  RESET_ATTACK_CYCLES = 'BOSSFIGHT_RESET_ATTACK_CYCLES',
  RESET_DEFENSE_FAILES = 'BOSSFIGHT_RESET_DEFENSE_FAILES'
}

// Mutation contracts
export type Mutations<S = BossfightStateInterface> = {
  [MutationTypes.SET_ATTENDEES](state: S, payload: number): void
  [MutationTypes.SET_HEALERS](state: S, payload: number): void
  [MutationTypes.SET_FIGHT_STATE](state: S, payload: FightState): void
  [MutationTypes.SET_ATTACK_STATE](state: S, payload: AttackState): void
  [MutationTypes.SET_DEFENSE_STATE](state: S, payload: DefenseState): void
  [MutationTypes.SET_BOSS_HPS](state: S, payload: number): void
  [MutationTypes.SET_MY_HPS](state: S, payload: number): void
  [MutationTypes.SET_BOSS_MAX_HPS](state: S, payload: number): void
  [MutationTypes.SET_MY_MAX_HPS](state: S, payload: number): void
  [MutationTypes.SET_FORCE](state: S, payload: number): void
  [MutationTypes.SET_SELECTED_ATTACK_TECHNIQUE_ID](state: S, payload: string): void
  [MutationTypes.SET_TOTAL_ATTACK_REPS](state: S, payload: number): void
  [MutationTypes.SET_ATTACK_CYCLES](state: S, payload: number): void
  [MutationTypes.SET_DEFENSE_FAILES](state: S, payload: number): void

  [MutationTypes.RESET_ATTENDEES](state: S): void
  [MutationTypes.RESET_HEALERS](state: S): void
  [MutationTypes.RESET_FIGHT_STATE](state: S): void
  [MutationTypes.RESET_ATTACK_STATE](state: S): void
  [MutationTypes.RESET_DEFENSE_STATE](state: S): void
  [MutationTypes.RESET_BOSS_HPS](state: S): void
  [MutationTypes.RESET_MY_HPS](state: S): void
  [MutationTypes.RESET_BOSS_MAX_HPS](state: S): void
  [MutationTypes.RESET_MY_MAX_HPS](state: S): void
  [MutationTypes.RESET_FORCE](state: S): void
  [MutationTypes.RESET_SELECTED_ATTACK_TECHNIQUE_ID](state: S): void
  [MutationTypes.RESET_TOTAL_ATTACK_REPS](state: S): void
  [MutationTypes.RESET_ATTACK_CYCLES](state: S): void
  [MutationTypes.RESET_DEFENSE_FAILES](state: S): void
}

// Define mutations
export const mutations: MutationTree<BossfightStateInterface> & Mutations = {
  [MutationTypes.SET_ATTENDEES] (state: BossfightStateInterface, payload: number) {
    state.attendees = payload
    localStorage.setItem('attendees', payload.toString())
  },
  [MutationTypes.SET_HEALERS] (state: BossfightStateInterface, payload: number) {
    state.healers = payload
    localStorage.setItem('healers', payload.toString())
  },
  [MutationTypes.SET_FIGHT_STATE] (state: BossfightStateInterface, payload: FightState) {
    state.fightState = payload
    localStorage.setItem('fightState', payload)
  },
  [MutationTypes.SET_ATTACK_STATE] (state: BossfightStateInterface, payload: AttackState) {
    state.attackState = payload
    localStorage.setItem('attackState', payload)
  },
  [MutationTypes.SET_DEFENSE_STATE] (state: BossfightStateInterface, payload: DefenseState) {
    state.defenseState = payload
    localStorage.setItem('defenseState', payload)
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
  [MutationTypes.SET_FORCE] (state: BossfightStateInterface, payload: number) {
    state.force = payload
    localStorage.setItem('force', payload.toString())
  },
  [MutationTypes.SET_SELECTED_ATTACK_TECHNIQUE_ID] (state: BossfightStateInterface, payload: string) {
    state.selectedAttackTechniqueId = payload
    localStorage.setItem('selectedAttackTechniqueId', payload.toString())
  },
  [MutationTypes.SET_TOTAL_ATTACK_REPS] (state: BossfightStateInterface, payload: number) {
    state.totalAttackReps = payload
    localStorage.setItem('totalAttackReps', payload.toString())
  },
  [MutationTypes.SET_ATTACK_CYCLES] (state: BossfightStateInterface, payload: number) {
    state.attackCycles = payload
    localStorage.setItem('attackCycles', payload.toString())
  },
  [MutationTypes.SET_DEFENSE_FAILES] (state: BossfightStateInterface, payload: number) {
    state.defenseFailes = payload
    localStorage.setItem('defenseFailes', payload.toString())
  },

  [MutationTypes.RESET_ATTENDEES] (state: BossfightStateInterface) {
    localStorage.removeItem('attendees')
    state.attendees = 0
  },
  [MutationTypes.RESET_HEALERS] (state: BossfightStateInterface) {
    localStorage.removeItem('healers')
    state.healers = 0
  },
  [MutationTypes.RESET_FIGHT_STATE] (state: BossfightStateInterface) {
    localStorage.removeItem('fightState')
    state.fightState = FightState.UNKNOWN
  },
  [MutationTypes.RESET_ATTACK_STATE] (state: BossfightStateInterface) {
    localStorage.removeItem('attackState')
    state.attackState = AttackState.UNKNOWN
  },
  [MutationTypes.RESET_DEFENSE_STATE] (state: BossfightStateInterface) {
    localStorage.removeItem('defenseState')
    state.defenseState = DefenseState.UNKNOWN
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
  },
  [MutationTypes.RESET_FORCE] (state: BossfightStateInterface) {
    localStorage.removeItem('force')
    state.force = 1
  },
  [MutationTypes.RESET_SELECTED_ATTACK_TECHNIQUE_ID] (state: BossfightStateInterface) {
    localStorage.removeItem('selectedAttackTechniqueId')
    state.selectedAttackTechniqueId = ''
  },
  [MutationTypes.RESET_TOTAL_ATTACK_REPS] (state: BossfightStateInterface) {
    localStorage.removeItem('totalAttackReps')
    state.totalAttackReps = 0
  },
  [MutationTypes.RESET_ATTACK_CYCLES] (state: BossfightStateInterface) {
    localStorage.removeItem('attackCycles')
    state.attackCycles = 0
  },
  [MutationTypes.RESET_DEFENSE_FAILES] (state: BossfightStateInterface) {
    localStorage.removeItem('defenseFailes')
    state.defenseFailes = 0
  }
}
