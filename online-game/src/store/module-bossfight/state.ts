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
        description: '...',
        baseDamage: 10,
        additionalDamage: 1.5,
        id: '1',
        minutes: 1,
        seconds: 0,
        damageClass: DamageClass.GIGANZISCH
      },
      {
        name: 'Kratzen',
        exercise: 'Mountainclimbers',
        description: '...',
        baseDamage: 3,
        additionalDamage: 1.1,
        id: '2',
        minutes: 1,
        seconds: 0,
        damageClass: DamageClass.STARK
      },
      {
        name: 'Beißen',
        exercise: 'Beiß-Plank',
        description: '...',
        baseDamage: 5,
        additionalDamage: 1.3,
        id: '3',
        minutes: 1,
        seconds: 0,
        damageClass: DamageClass.GANZ_SOLIDE
      },
      {
        name: 'Flügelschlag',
        exercise: 'Schwimmer',
        description: '...',
        baseDamage: 8,
        additionalDamage: 2,
        id: '4',
        minutes: 1,
        seconds: 0,
        damageClass: DamageClass.SCHWACH
      },
      {
        name: 'Schwanzschlag',
        exercise: 'Kniebeuge',
        description: '...',
        baseDamage: 5,
        additionalDamage: 1,
        id: '5',
        minutes: 1,
        seconds: 0,
        damageClass: DamageClass.SCHLAPP
      }
    ],
    bossTechniques: [
      {
        name: 'Furzattacke',
        exercise: 'Beine heben',
        description: '...',
        baseDamage: 50,
        additionalDamage: 1000,
        id: '8',
        minutes: 5,
        seconds: 0,
        damageClass: DamageClass.GIGANZISCH
      },
      {
        name: 'Hammerschlag',
        exercise: 'Wu-chi',
        description: '...',
        baseDamage: 50,
        additionalDamage: 1000,
        id: '6',
        minutes: 1,
        seconds: 30,
        damageClass: DamageClass.GIGANZISCH
      },
      {
        name: 'Tentakelpeitsche',
        exercise: 'Plank',
        description: '...',
        baseDamage: 20,
        additionalDamage: 150,
        id: '8',
        minutes: 5,
        seconds: 0,
        damageClass: DamageClass.STARK
      },
      {
        name: 'Laserauge',
        exercise: 'Schulterbrücke',
        description: '...',
        baseDamage: 20,
        additionalDamage: 150,
        id: '8',
        minutes: 5,
        seconds: 0,
        damageClass: DamageClass.GANZ_SOLIDE
      },
      {
        name: 'Psychogrollen',
        exercise: 'Baum',
        description: '...',
        baseDamage: 20,
        additionalDamage: 150,
        id: '8',
        minutes: 5,
        seconds: 0,
        damageClass: DamageClass.SCHWACH
      },
      {
        name: 'Erdbeben',
        exercise: 'Arme seitlich federn',
        description: '...',
        baseDamage: 0,
        additionalDamage: 150,
        id: '7',
        minutes: 2,
        seconds: 0,
        damageClass: DamageClass.SCHLAPP
      }
    ]
  }
}

export default state
