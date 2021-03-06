
import { computed } from 'vue'
// import { useRouter } from 'vue-router'
import { useStore } from 'src/store'
import { MutationTypes } from 'src/store/module-bossfight/mutations'
import { AttackState, DefenseState, FightState } from 'src/models/types/bossfight'
import { calculateHealing, calculateMyDamageEffect, calculateBossDamageEffect } from 'src/utils/bossfightUtils'
import useProfile from 'src/use/useProfile'

export default function useGetters () {
  // const router = useRouter()
  const { getters, commit } = useStore()
  const { getTotalHealingBoost, getTotalAttackBoost, getTotalDefenseBoost } = useProfile()

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

  const getHealers = computed(() => {
    const healersLocStore = localStorage.getItem('healers')
    if (!healersLocStore) {
      return getters.getHealers
    }
    if (healersLocStore !== getters.getHealers.toString()) {
      commit(MutationTypes.SET_HEALERS, Number.parseInt(healersLocStore))
    }
    return getters.getHealers
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

  const getDefenseState = computed(() => {
    const defenseStateLocStore = localStorage.getItem('defenseState')
    if (!defenseStateLocStore) {
      return getters.getDefenseState
    }
    if (defenseStateLocStore !== getters.getDefenseState) {
      commit(MutationTypes.SET_DEFENSE_STATE, <DefenseState>defenseStateLocStore)
    }
    return getters.getDefenseState
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

  const getBossMaxHPs = computed(() => {
    const bossMaxHPsLocStore = localStorage.getItem('bossMaxHPs')
    if (!bossMaxHPsLocStore) {
      return getters.getBossMaxHPs
    }
    if (bossMaxHPsLocStore !== getters.getBossMaxHPs.toString()) {
      commit(MutationTypes.SET_BOSS_MAX_HPS, Number.parseInt(bossMaxHPsLocStore))
    }
    return getters.getBossMaxHPs
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

  const getMyMaxHPs = computed(() => {
    const myMaxHPsLocStore = localStorage.getItem('myMaxHPs')
    if (!myMaxHPsLocStore) {
      return getters.getMyMaxHPs
    }
    if (myMaxHPsLocStore !== getters.getMyMaxHPs.toString()) {
      commit(MutationTypes.SET_MY_MAX_HPS, Number.parseInt(myMaxHPsLocStore))
    }
    return getters.getMyMaxHPs
  })

  const getForce = computed(() => {
    const forceLocStore = localStorage.getItem('force')
    if (!forceLocStore) {
      return getters.getForce
    }
    if (forceLocStore !== getters.getForce.toString()) {
      commit(MutationTypes.SET_FORCE, Number.parseInt(forceLocStore))
    }
    return getters.getForce
  })

  const getSelectedAttackTechniqueId = computed(() => {
    console.log('it commits')
    const techIdLocStore = localStorage.getItem('selectedAttackTechniqueId')
    if (!techIdLocStore) {
      return getters.getSelectedAttackTechniqueId
    }
    if (techIdLocStore !== getters.getSelectedAttackTechniqueId.toString()) {
      commit(MutationTypes.SET_SELECTED_ATTACK_TECHNIQUE_ID, techIdLocStore)
    }
    return getters.getSelectedAttackTechniqueId
  })

  const getMyTechniqueById = (id: string) => {
    console.log('techid', id)
    const technique = getters.getMyTechniques.find((val) => val.id === id)
    if (!technique) {
      throw Error('Technique not found by id!')
    }
    return technique
  }

  const getTotalAttackReps = computed(() => {
    const attackRepsLocStore = localStorage.getItem('totalAttackReps')
    if (!attackRepsLocStore) {
      return getters.getTotalAttackReps
    }
    if (attackRepsLocStore !== getters.getTotalAttackReps.toString()) {
      commit(MutationTypes.SET_TOTAL_ATTACK_REPS, Number.parseInt(attackRepsLocStore))
    }
    return getters.getTotalAttackReps
  })

  const getAttackCycles = computed(() => {
    const attackCyclesLocStore = localStorage.getItem('attackCycles')
    if (!attackCyclesLocStore) {
      return getters.getAttackCycles
    }
    if (attackCyclesLocStore !== getters.getAttackCycles.toString()) {
      commit(MutationTypes.SET_ATTACK_CYCLES, Number.parseInt(attackCyclesLocStore))
    }
    return getters.getAttackCycles
  })

  const getDefenseFailes = computed(() => {
    const defenseFailesLocStore = localStorage.getItem('defenseFailes')
    if (!defenseFailesLocStore) {
      return getters.getDefenseFailes
    }
    if (defenseFailesLocStore !== getters.getDefenseFailes.toString()) {
      commit(MutationTypes.SET_DEFENSE_FAILES, Number.parseInt(defenseFailesLocStore))
    }
    return getters.getDefenseFailes
  })

  const healedHPs = computed(() => calculateHealing(getHealers.value, getTotalHealingBoost.value, getForce.value))

  const damageHPs = computed(() => {
    try {
      return calculateMyDamageEffect(getTotalAttackReps.value, getTotalAttackBoost.value, getMyTechniqueById(getSelectedAttackTechniqueId.value), getForce.value)
    } catch (err) {
      return 0
    }
  })

  const damageBossHPs = computed(() => calculateBossDamageEffect(getAttendees.value, getDefenseFailes.value, getTotalDefenseBoost.value, getBossTechniqueById(getSelectedAttackTechniqueId.value)))

  function getBossAttackIds () {
    return getters.getBossTechniques.map((val) => val.id)
  }

  function getBossTechniqueById (id: string) {
    const technique = getters.getBossTechniques.find((val) => val.id === id)
    if (!technique) {
      throw Error('Technique not found by id!')
    }
    return technique
  }

  return {
    getAttendees,
    getHealers,
    getFightState,
    getAttackState,
    getDefenseState,
    getBossHPs,
    getMyHPs,
    getBossMaxHPs,
    getMyMaxHPs,
    getForce,
    getAttackCycles,
    getSelectedAttackTechniqueId,
    getMyTechniqueById,
    getBossTechniqueById,
    getTotalAttackReps,
    healedHPs,
    damageHPs,
    damageBossHPs,
    getDefenseFailes,
    getMyTechniques: computed(() => getters.getMyTechniques),
    getBossTechniques: computed(() => getters.getBossTechniques),
    getBossAttackIds
  }
}
