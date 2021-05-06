
import { computed } from 'vue'
// import { useRouter } from 'vue-router'
import { useStore } from 'src/store'
import { MutationTypes } from 'src/store/module-defense-game/mutations'
import { DefGameState } from 'src/models/types/defense-game'

export default function useGetters () {
  // const router = useRouter()
  const { getters, commit } = useStore()

  const getDefenseGameState = computed(() => {
    const defenseStateLocStore = localStorage.getItem('defenseGameState')
    if (!defenseStateLocStore) {
      return getters.getDefenseGameState
    }
    if (defenseStateLocStore !== getters.getDefenseGameState) {
      commit(MutationTypes.SET_DEFENSE_GAME_STATE, <DefGameState>defenseStateLocStore)
    }
    return getters.getDefenseGameState
  })

  const getDefGameAttendees = computed(() => {
    const defAttendeesLocStore = localStorage.getItem('defGameAttendees')
    if (!defAttendeesLocStore) {
      return getters.getDefGameAttendees
    }
    if (defAttendeesLocStore !== getters.getDefGameAttendees.toString()) {
      commit(MutationTypes.SET_DEF_GAME_ATTENDEES, Number.parseInt(defAttendeesLocStore))
    }
    return getters.getDefGameAttendees
  })

  return {
    getDefenseGameState,
    getDefGameAttendees,
    getActiveAttendees: computed(() => getters.getActiveAttendees),
    getGameOverTime: computed(() => getters.getGameOverTime),
    getDefaultMin: computed(() => getters.getDefaultMin),
    getDefaultSec: computed(() => getters.getDefaultSec),
    getResults: computed(() => getters.getResults)
  }
}
