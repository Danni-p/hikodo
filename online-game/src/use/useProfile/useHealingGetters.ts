import { computed } from 'vue'
import { useStore } from 'src/store'
import useFeature from '../useFeature'
import { calculateMaxBoost } from 'src/utils/profileUtils'

export default function useHealingGetters () {
  const { getters } = useStore()
  const { getFeatureByType } = useFeature()
  // ATTACK
  const _totalHealingBoost = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    const feature = getFeatureByType('healing')
    const reps = feature.reps
    const maxReps = feature.maxReps
    const bonusMax = feature.bonusMax
    const boost = getters.getHealingSkill.boost
    return (reps / maxReps) * bonusMax + boost
  }

  const _totalHealingMaxBoost = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    const bonusMax = getFeatureByType('healing').bonusMax
    const maxBoost = calculateMaxBoost('healing')
    return bonusMax + maxBoost
  }

  const _totalHealingBoostInPercent = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    console.log('healingboost', _totalHealingBoost())
    console.log('healingMaxboost', _totalHealingMaxBoost())
    return (_totalHealingBoost() / _totalHealingMaxBoost()) * 100
  }

  return {
    getTotalHealingBoostInPercent: computed(() => Math.ceil(_totalHealingBoostInPercent())),
    getTotalHealingBoost: computed(() => Math.ceil(_totalHealingBoost())),
    _totalHealingBoost,
    _totalHealingMaxBoost,
    _totalHealingBoostInPercent
  }
}
