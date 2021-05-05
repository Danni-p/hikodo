import { AttackState, DefenseState, DamageClass, FightState, Technique } from 'src/models/types/bossfight'

export interface BossfightStateInterface {
  attendees: number
  healers: number
  force: number
  attackCycles: number
  fightState: FightState
  attackState: AttackState
  defenseState: DefenseState
  bossHPs: number
  myHPs: number
  bossMaxHPs: number
  myMaxHPs: number
  myTechniques: Technique[]
  bossTechniques: Technique[]
  selectedAttackTechniqueId: string
  totalAttackReps: number
  defenseFailes: number
}

function state (): BossfightStateInterface {
  return {
    attendees: 0,
    attackCycles: 0,
    healers: 0,
    force: 1,
    fightState: FightState.UNKNOWN,
    attackState: AttackState.UNKNOWN,
    defenseState: DefenseState.UNKNOWN,
    bossHPs: -1,
    myHPs: -1,
    bossMaxHPs: -1,
    myMaxHPs: -1,
    totalAttackReps: 0,
    selectedAttackTechniqueId: '',
    defenseFailes: 0,
    myTechniques: [
      {
        name: 'Feuer spucken',
        exercise: 'Liegestütze',
        description: 'Mache saubere Liegestütze',
        baseDamage: 0.2,
        additionalDamage: 0,
        id: '1',
        minutes: 1,
        seconds: 0,
        damageClass: DamageClass.GIGANZISCH
      },
      {
        name: 'Schwanzschlag',
        exercise: 'Kniebeuge',
        description: 'Mache saubere Kniebeuge',
        baseDamage: 0.1,
        additionalDamage: 0,
        id: '2',
        minutes: 1,
        seconds: 0,
        damageClass: DamageClass.GANZ_SOLIDE
      }
    ],
    bossTechniques: [
      {
        name: 'Hammerschlag',
        exercise: 'Wu-chi',
        description: 'Mache eine tiefe Wu Chi',
        baseDamage: 20,
        additionalDamage: 150,
        id: '6',
        minutes: 1,
        seconds: 30,
        damageClass: DamageClass.GIGANZISCH
      },
      {
        name: 'Erdbeben',
        exercise: 'Arme seitlich federn',
        description: 'Federe mit deinen Armen kurz und schnell.',
        baseDamage: 20,
        additionalDamage: 150,
        id: '7',
        minutes: 2,
        seconds: 0,
        damageClass: DamageClass.GIGANZISCH
      },
      {
        name: 'Laserauge',
        exercise: 'Schulterbrücke',
        description: 'Knie und hacken zusammen. Po soweit wie möglich nach oben.',
        baseDamage: 20,
        additionalDamage: 150,
        id: '8',
        minutes: 5,
        seconds: 0,
        damageClass: DamageClass.GIGANZISCH
      }
    ]
  }
}

export default state
