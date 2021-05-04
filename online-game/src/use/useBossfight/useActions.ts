
// import { useRouter } from 'vue-router'
import { AttackState, FightState } from 'src/models/types/bossfight'
import { useStore } from 'src/store'
import { MutationTypes } from 'src/store/module-bossfight/mutations'
import { ActionTypes } from 'src/store/module-bossfight/actions'
import { calculateBossHPs, calculateHPs } from 'src/utils/bossfightUtils'
import useProfile from 'src/use/useProfile'

export default function useActions () {
  const { getTotalHealthBoost } = useProfile()
  const store = useStore()

  function initializeFight (count: number) {
    store.commit(MutationTypes.SET_ATTENDEES, count)
    const bossHPs = calculateBossHPs(count)
    const myHPs = calculateHPs(count, getTotalHealthBoost.value)
    store.commit(MutationTypes.SET_BOSS_HPS, bossHPs)
    store.commit(MutationTypes.SET_BOSS_MAX_HPS, bossHPs)
    store.commit(MutationTypes.SET_MY_HPS, myHPs)
    store.commit(MutationTypes.SET_MY_MAX_HPS, myHPs)
  }

  function resetFight () {
    store.dispatch(ActionTypes.RESET_FIGHT, undefined)
  }

  function setFightState (fightState: FightState) {
    store.commit(MutationTypes.SET_FIGHT_STATE, fightState)
  }

  function setAttackState (attackState: AttackState) {
    store.commit(MutationTypes.SET_ATTACK_STATE, attackState)
  }

  return {
    initializeFight,
    resetFight,
    setFightState,
    setAttackState
  }
}
