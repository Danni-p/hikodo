
import { computed } from 'vue'
// import { useRouter } from 'vue-router'
import { useStore } from 'src/store'
import { MutationTypes } from 'src/store/module-bossfight/mutations'
import { AttackState, FightState } from 'src/models/types/bossfight'

export default function useGetters () {
  // const router = useRouter()
  const { getters, commit } = useStore()

  const getAttendees = computed(() => {
    const attendeesLocStore = localStorage.getItem('attendees')
    if (!attendeesLocStore) {
      return getters.getAttendees
    }
    if (attendeesLocStore !== getters.getAttendees.toString()) {
      commit(MutationTypes.SET_ATTENDEES, Number.parseInt(attendeesLocStore))
    }
    return getters.getAttendees
  })

  const getFightState = computed(() => {
    const fightStateLocStore = localStorage.getItem('fightState')
    if (!fightStateLocStore) {
      return getters.getFightState
    }
    if (fightStateLocStore !== getters.getFightState) {
      commit(MutationTypes.SET_FIGHT_STATE, <FightState>fightStateLocStore)
    }
    return getters.getFightState
  })

  const getAttackState = computed(() => {
    const attackStateLocStore = localStorage.getItem('attackState')
    if (!attackStateLocStore) {
      return getters.getAttackState
    }
    if (attackStateLocStore !== getters.getAttackState) {
      commit(MutationTypes.SET_ATTACK_STATE, <AttackState>attackStateLocStore)
    }
    return getters.getAttackState
  })

  const getBossHPs = computed(() => {
    const bossHPsLocStore = localStorage.getItem('bossHPs')
    if (!bossHPsLocStore) {
      return getters.getBossHPs
    }
    if (bossHPsLocStore !== getters.getBossHPs.toString()) {
      commit(MutationTypes.SET_BOSS_HPS, Number.parseInt(bossHPsLocStore))
    }
    return getters.getBossHPs
  })

  const getMyHPs = computed(() => {
    const myHPsLocStore = localStorage.getItem('myHPs')
    if (!myHPsLocStore) {
      return getters.getMyHPs
    }
    if (myHPsLocStore !== getters.getMyHPs.toString()) {
      commit(MutationTypes.SET_MY_HPS, Number.parseInt(myHPsLocStore))
    }
    return getters.getMyHPs
  })

  return {
    getAttendees,
    getFightState,
    getAttackState,
    getBossHPs,
    getMyHPs,
    getMyTechniques: computed(() => getters.getMyTechniques),
    getBossTechniques: computed(() => getters.getBossTechniques)
  }
}
