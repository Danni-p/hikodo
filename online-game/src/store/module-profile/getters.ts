import { Skill } from 'src/models/types/profile'
import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ProfileStateInterface } from './state'

export type Getters = {
  getAttackSkill (state: ProfileStateInterface): Skill;
  getDefenseSkill (state: ProfileStateInterface): Skill;
  getHealingSkill (state: ProfileStateInterface): Skill;
}

export const getters: GetterTree<ProfileStateInterface, StateInterface> & Getters = {
  getAttackSkill (state) {
    return state.attackSkill
  },
  getDefenseSkill (state) {
    return state.defenseSkill
  },
  getHealingSkill (state) {
    return state.healingSkill
  }
}
