
// import { useRouter } from 'vue-router'
import { AttackState, DefenseState, FightState } from 'src/models/types/bossfight'
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

  function setDefenseState (defenseState: DefenseState) {
    store.commit(MutationTypes.SET_DEFENSE_STATE, defenseState)
  }

  function setHealers (healers: number) {
    store.commit(MutationTypes.SET_HEALERS, healers)
  }

  function setForce (force: number) {
    store.commit(MutationTypes.SET_FORCE, force)
  }

  function setSelectedAttackTechniqueId (id: string) {
    store.commit(MutationTypes.SET_SELECTED_ATTACK_TECHNIQUE_ID, id)
  }

  function setTotalAttackDamage (damage: number) {
    store.commit(MutationTypes.SET_TOTAL_ATTACK_REPS, damage)
  }

  function setAttackCycles (cycles: number) {
    store.commit(MutationTypes.SET_ATTACK_CYCLES, cycles)
  }

  function setDefenseFailes (failes: number) {
    store.commit(MutationTypes.SET_DEFENSE_FAILES, failes)
  }

  function setBossHPs (hps: number) {
    store.commit(MutationTypes.SET_BOSS_HPS, hps)
  }

  function setMyHPs (hps: number) {
    store.commit(MutationTypes.SET_MY_HPS, hps)
  }

  return {
    initializeFight,
    resetFight,
    setFightState,
    setAttackState,
    setDefenseState,
    setHealers,
    setForce,
    setAttackCycles,
    setSelectedAttackTechniqueId,
    setTotalAttackDamage,
    setBossHPs,
    setMyHPs,
    setDefenseFailes
  }
}
