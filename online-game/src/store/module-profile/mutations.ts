/* eslint-disable no-unused-vars */

import { SkillWithId } from 'src/models/types/profile'
import { MutationTree } from 'vuex'
import { ProfileStateInterface } from './state'

export enum MutationTypes {
  ADD_SKILL = 'PROFILE_ADD_SKILL',
  UPDATE_SKILL = 'PROFILE_UPDATE_SKILL',
  DELETE_SKILL = 'PROFILE_DELETE_SKILL',
}

// Mutation contracts
export type Mutations<S = ProfileStateInterface> = {
  [MutationTypes.UPDATE_SKILL](state: S, payload: SkillWithId): void
  [MutationTypes.ADD_SKILL](state: S, payload: SkillWithId): void
  [MutationTypes.DELETE_SKILL](state: S, payload: SkillWithId): void
}

// Define mutations
export const mutations: MutationTree<ProfileStateInterface> & Mutations = {
  [MutationTypes.UPDATE_SKILL] (state: ProfileStateInterface, payload: SkillWithId) {
    const { id, ...act } = payload
    if (id === 'attack') {
      Object.assign(state.attackSkill, act)
    } else if (id === 'defense') {
      Object.assign(state.defenseSkill, act)
    } else if (id === 'healing') {
      Object.assign(state.healingSkill, act)
    }
  },
  [MutationTypes.ADD_SKILL] (state: ProfileStateInterface, payload: SkillWithId) {
    const { id, ...act } = payload
    if (id === 'attack') {
      Object.assign(state.attackSkill, act)
    } else if (id === 'defense') {
      Object.assign(state.defenseSkill, act)
    } else if (id === 'healing') {
      Object.assign(state.healingSkill, act)
    }
  },
  [MutationTypes.DELETE_SKILL] (state: ProfileStateInterface, payload: SkillWithId) {
    const { id } = payload
    if (id === 'attack') {
      state.attackSkill.boost = 0
      state.attackSkill.level = 0
      state.attackSkill.name = ''
    } else if (id === 'defense') {
      state.defenseSkill.boost = 0
      state.defenseSkill.level = 0
      state.defenseSkill.name = ''
    } else if (id === 'healing') {
      state.healingSkill.boost = 0
      state.healingSkill.level = 0
      state.healingSkill.name = ''
    }
  }
}
