import { FightState } from 'src/models/types/bossfight'

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
  console.log('hp boost', hpBoost)
  return 600 * (1 + hpBoost) * attendeeNr
}
