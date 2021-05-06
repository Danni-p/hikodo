
import { computed } from 'vue'
// import { useRouter } from 'vue-router'
import { useStore } from 'src/store'
import useProfile from 'src/use/useProfile'
import { calculateMyDamageEffect, calculateBossDamageEffect } from 'src/utils/bossfightUtils'

export default function useGetters () {
  const { getTotalAttackBoost, getTotalDefenseBoost } = useProfile()
  // const router = useRouter()
  const { getters } = useStore()

  const avgMyReps = new Map<string, number>()
  avgMyReps.set('1', 23)
  avgMyReps.set('2', 53)
  avgMyReps.set('3', 28)
  avgMyReps.set('4', 17)
  avgMyReps.set('5', 30)

  const getMyDamageData = computed(() => {
    const myTechniques = getters.getMyTechniques
    const boost = getTotalAttackBoost.value
    const data = [] as {name: string, one: number, five: number, ten: number }[]
    for (const technique of myTechniques) {
      const obj = {
        name: technique.name,
        one: calculateMyDamageEffect(avgMyReps.get(technique.id) || 0, boost, technique, 1),
        five: calculateMyDamageEffect((avgMyReps.get(technique.id) || 0) * 5, boost, technique, 1),
        ten: calculateMyDamageEffect((avgMyReps.get(technique.id) || 0) * 10, boost, technique, 1)
      }
      data.push(obj)
    }
    return data
  })

  const getBossDamageData10Attendees = computed(() => {
    const bossTechniques = getters.getBossTechniques
    const boost = getTotalDefenseBoost.value
    const data = [] as {name: string, zeroFails: number, halfFails: number, allFails: number }[]
    for (const technique of bossTechniques) {
      const obj = {
        name: technique.name,
        zeroFails: calculateBossDamageEffect(10, 0, boost, technique),
        halfFails: calculateBossDamageEffect(10, 5, boost, technique),
        allFails: calculateBossDamageEffect(10, 10, boost, technique)
      }
      data.push(obj)
    }
    return data
  })

  return {
    getMyDamageData,
    getBossDamageData10Attendees
  }
}
