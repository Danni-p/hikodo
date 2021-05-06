/* eslint-disable no-unused-vars */
export enum FightState {
  ATTACK = 'attack',
  DEFENSE = 'defense',
  WIN = 'win',
  UNKNOWN ='unknown'
}

export enum AttackState {
  CHOOSE_TECHNIQUE = 'choose_technique',
  CHOOSE_HEALING = 'choose_healing',
  ACTION_TIME = 'action_time',
  HEALING_TIME = 'healing_time',
  COLLECT_DAMAGE = 'collect_damage',
  FINISH_ATTACK = 'finish_attack',
  UNKNOWN ='unknown'
}

export enum DefenseState {
  CHOOSE_TECHNIQUE = 'choose_technique',
  DEFENSE_TIME = 'defense_time',
  COLLECT_FAILES = 'collect_failes',
  FINISH_DEFENSE = 'finish_defense',
  UNKNOWN ='unknown'
}

export enum DamageClass {
  GIGANZISCH = 'gigantisch',
  STARK = 'stark',
  GANZ_SOLIDE = 'ganz solide',
  SCHWACH = 'schwach',
  SCHLAPP ='schlapp'
}

export interface Technique {
  name: string;
  exercise: string;
  description: string;
  baseDamage: number;
  additionalDamage: number;
  id: string;
  minutes: number;
  seconds: number;
  damageClass: DamageClass;
}
