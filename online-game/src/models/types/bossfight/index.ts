/* eslint-disable no-unused-vars */
export enum FightState {
  ATTACK = 'attack',
  DEFENSE = 'defense',
  UNKNOWN ='unknown'
}

export enum AttackState {
  CHOOSE_TECHNIQUE = 'choose_technique',
  CHOOSE_HEALING = 'choose_healing',
  ACTION_TIME = 'action_time',
  UNKNOWN ='unknown'
}

export enum DamageClass {
  GIGANZISCH = 'gigantisch',
  VERNUENFTIG = 'vernünftig',
  GANZ_SOLIDE = 'ganz solide',
  PEINLICH_NIEDRICH ='peinlich niedrich'
}

export interface Technique {
  name: string;
  exercise: string;
  description: string;
  baseDamage: number;
  additionalDamage: number;
  id: string;
  damageClass: DamageClass;
}
