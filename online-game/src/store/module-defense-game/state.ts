import { DefGameState } from 'src/models/types/defense-game'

export interface DefenseGameStateInterface {
  defGameState: DefGameState
  defGameAttendees: number
  activeAttendees: number
  gameOverTime: number
  defaultMin: number
  defaultSec: number
  results: number[]
}

function state (): DefenseGameStateInterface {
  return {
    defGameState: DefGameState.UNKNOWN,
    defGameAttendees: 0,
    activeAttendees: 0,
    gameOverTime: 0,
    defaultMin: 10,
    defaultSec: 0,
    results: []
  }
}

export default state
