
// import { useRouter } from 'vue-router'
import { DefGameState } from 'src/models/types/defense-game'
import { useStore } from 'src/store'
import { ActionTypes } from 'src/store/module-defense-game/actions'
import { MutationTypes } from 'src/store/module-defense-game/mutations'

export default function useActions () {
  // const router = useRouter()
  const store = useStore()

  function resetDefenseGame () {
    store.dispatch(ActionTypes.RESET_DEFENSE_GAME, undefined)
  }

  function setDefenseGameState (defGameState: DefGameState) {
    store.commit(MutationTypes.SET_DEFENSE_GAME_STATE, defGameState)
  }

  function setDefGameAttendees (attendees: number) {
    store.commit(MutationTypes.SET_DEF_GAME_ATTENDEES, attendees)
  }

  function setActiveAttendees (attendees: number) {
    store.commit(MutationTypes.SET_ACTIVE_ATTENDEES, attendees)
  }

  function setGameOverTime (time: number) {
    store.commit(MutationTypes.SET_GAME_OVER_TIME, time)
  }

  function addResult (result: number) {
    store.commit(MutationTypes.ADD_RESULT, result)
  }

  function removeResult (result: number) {
    store.commit(MutationTypes.REMOVE_RESULT, result)
  }

  function clearResults () {
    store.commit(MutationTypes.CLEAR_RESULTS, undefined)
  }

  return {
    setDefenseGameState,
    resetDefenseGame,
    setDefGameAttendees,
    setActiveAttendees,
    setGameOverTime,
    addResult,
    removeResult,
    clearResults
  }
}
