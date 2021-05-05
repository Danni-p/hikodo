import { FightState, Technique } from 'src/models/types/bossfight'

export function attackOrDefense () {
  const head = (Math.floor(Math.random() * 2) === 0)
  if (head) {
    return FightState.ATTACK
  } else {
    return FightState.ATTACK
  }
}

export function calculateBossHPs (attendeeNr: number) {
  return 1000 * attendeeNr
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
  return Math.ceil(reps * (1 + attackBoost + technique.baseDamage) * force)
}
