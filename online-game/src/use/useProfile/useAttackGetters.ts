import { computed } from 'vue'
import { useStore } from 'src/store'
import useFeature from '../useFeature'
import { calculateMaxBoost } from 'src/utils/profileUtils'

export default function useAttackGetters () {
  const { getters } = useStore()
  const { getFeatureByType } = useFeature()
  // ATTACK
  const _totalAttackBoost = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    const feature = getFeatureByType('attack')
    const reps = feature.reps
    const maxReps = feature.maxReps
    const bonusMax = feature.bonusMax
    const boost = getters.getAttackSkill.boost
    return (reps / maxReps) * bonusMax + boost
  }

  const _totalAttackMaxBoost = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    const bonusMax = getFeatureByType('attack').bonusMax
    const maxBoost = calculateMaxBoost('attack')
    return bonusMax + maxBoost
  }

  const _totalAttackBoostInPercent = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    return (_totalAttackBoost() / _totalAttackMaxBoost()) * 100
  }

  return {
    getTotalAttackBoostInPercent: computed(() => Math.ceil(_totalAttackBoostInPercent())),
    getTotalAttackBoost: computed(() => _totalAttackBoost()),
    _totalAttackBoost,
    _totalAttackMaxBoost,
    _totalAttackBoostInPercent
  }
}
