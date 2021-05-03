import { computed } from 'vue'
import { useStore } from 'src/store'
import useFeature from '../useFeature'
import { calculateMaxBoost } from 'src/utils/profileUtils'

export default function useDefenseGetters () {
  const { getters } = useStore()
  const { getFeatureByType } = useFeature()
  // ATTACK
  const _totalDefenseBoost = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    const feature = getFeatureByType('defense')
    const reps = feature.reps
    const maxReps = feature.maxReps
    const bonusMax = feature.bonusMax
    const boost = getters.getDefenseSkill.boost
    return (reps / maxReps) * bonusMax + boost
  }

  const _totalDefenseMaxBoost = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    const bonusMax = getFeatureByType('defense').bonusMax
    const maxBoost = calculateMaxBoost('defense')
    return bonusMax + maxBoost
  }

  const _totalDefenseBoostInPercent = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    return (_totalDefenseBoost() / _totalDefenseMaxBoost()) * 100
  }

  return {
    getTotalDefenseBoostInPercent: computed(() => Math.ceil(_totalDefenseBoostInPercent())),
    getTotalDefenseBoost: computed(() => Math.ceil(_totalDefenseBoost())),
    _totalDefenseBoost,
    _totalDefenseMaxBoost,
    _totalDefenseBoostInPercent
  }
}
