import { AttackState, DamageClass, FightState, Technique } from 'src/models/types/bossfight'

export interface BossfightStateInterface {
  attendees: number
  healers: number
  force: number
  attackCycles: number
  fightState: FightState
  attackState: AttackState
  bossHPs: number
  myHPs: number
  bossMaxHPs: number
  myMaxHPs: number
  myTechniques: Technique[]
  bossTechniques: Technique[]
  selectedAttackTechniqueId: string
  totalAttackReps: number
}

function state (): BossfightStateInterface {
  return {
    attendees: 0,
    attackCycles: 0,
    healers: 0,
    force: 1,
    fightState: FightState.UNKNOWN,
    attackState: AttackState.UNKNOWN,
    bossHPs: -1,
    myHPs: -1,
    bossMaxHPs: -1,
    myMaxHPs: -1,
    totalAttackReps: 0,
    selectedAttackTechniqueId: '',
    myTechniques: [
      {
        name: 'Feuer spucken',
        exercise: 'Liegestütze',
        description: 'Mache saubere Liegestütze',
        baseDamage: 0.2,
        additionalDamage: 0,
        id: '1',
        damageClass: DamageClass.GIGANZISCH
      },
      {
        name: 'Schwanzschlag',
        exercise: 'Kniebeuge',
        description: 'Mache saubere Kniebeuge',
        baseDamage: 0.1,
        additionalDamage: 0,
        id: '2',
        damageClass: DamageClass.GANZ_SOLIDE
      }
    ],
    bossTechniques: [

    ]
  }
}

export default state
