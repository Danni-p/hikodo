import { AttackState, DamageClass, FightState, Technique } from 'src/models/types/bossfight'

export interface BossfightStateInterface {
  attendees: number
  fightState: FightState
  attackState: AttackState
  bossHPs: number
  myHPs: number
  bossMaxHPs: number
  myMaxHPs: number
  myTechniques: Technique[]
  bossTechniques: Technique[]
}

function state (): BossfightStateInterface {
  return {
    attendees: 0,
    fightState: FightState.UNKNOWN,
    attackState: AttackState.UNKNOWN,
    bossHPs: -1,
    myHPs: -1,
    bossMaxHPs: -1,
    myMaxHPs: -1,
    myTechniques: [
      {
        name: 'Feuer spucken',
        exercise: 'Liegestütze',
        description: 'Mache saubere Liegestütze',
        baseDamage: 10,
        additionalDamage: 150,
        id: '1',
        damageClass: DamageClass.GIGANZISCH
      },
      {
        name: 'Schwanzschlag',
        exercise: 'Kniebeuge',
        description: 'Mache saubere Kniebeuge',
        baseDamage: 5,
        additionalDamage: 100,
        id: '2',
        damageClass: DamageClass.GANZ_SOLIDE
      }
    ],
    bossTechniques: [

    ]
  }
}

export default state
