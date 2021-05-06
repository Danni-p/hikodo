import { FightState, Technique } from 'src/models/types/bossfight'

export function attackOrDefense () {
  const head = (Math.floor(Math.random() * 2) === 0)
  if (head) {
    return FightState.ATTACK
  } else {
    return FightState.DEFENSE
  }
}

export function calculateBossHPs (attendeeNr: number) {
  return 1000 * attendeeNr * (1 - attendeeNr * 0.01)
}

export function calculateHPs (attendeeNr: number, hpBoost: number) {
  return 600 * (1 + hpBoost) * attendeeNr
}

export function calculateHealing (healersNr: number, healingBoost: number, force: number) {
  const faktor = 10
  console.log('calcHealing', Math.ceil(healersNr * (1 + healingBoost) * faktor * force))
  return Math.ceil(healersNr * (1 + healingBoost) * faktor * force)
}

export function calculateMyDamageEffect (reps: number, attackBoost: number, technique: Technique, force: number) {
  console.log('calcDamageEffect', reps, attackBoost, technique.baseDamage, force)
  return Math.ceil(technique.baseDamage + reps * (technique.additionalDamage + attackBoost) * force)
  // return Math.ceil(reps * (1 + attackBoost + technique.baseDamage) * force)
  // return Math.ceil((technique.baseDamage * reps + technique.additionalDamage * attackBoost) * force)
}

export function calculateBossDamageEffect (attendeeNr: number, failes: number, defenseBoost: number, technique: Technique) {
  console.log('calcDamageEffect', failes, defenseBoost, technique.baseDamage, technique.additionalDamage)
  const faktor = 5

  let addPart = technique.additionalDamage - (attendeeNr - failes) * (1 + defenseBoost) * faktor
  if (addPart < 0) addPart = 0
  return technique.baseDamage + addPart
}

export function getAttackImage (id: string) {
  if (id === '1') {
    return 'attacks/fire.svg'
  } else if (id === '2') {
    return 'attacks/klaue.svg'
  } else if (id === '3') {
    return 'attacks/biss.svg'
  } else if (id === '4') {
    return 'attacks/wings.svg'
  } else if (id === '5') {
    return 'attacks/tail.svg'
  } else {
    return 'attacks/tail.svg'
  }
}

export function chooseRandomId (ids: string[]) {
  const len = ids.length
  if (len === 0) {
    throw Error('No Id was transferred!')
  }

  const idx = Math.floor(Math.random() * (len))
  return ids[idx]
}
