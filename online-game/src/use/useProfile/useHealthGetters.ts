import { computed } from 'vue'
import { useStore } from 'src/store'
import useFeature from '../useFeature'

export default function useHealthGetters () {
  const { getters } = useStore()
  const { getFeatureByType } = useFeature()
  // ATTACK
  const _totalHealthBoost = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    const feature = getFeatureByType('health')
    const reps = feature.reps
    const maxReps = feature.maxReps
    const bonusMax = feature.bonusMax
    return (reps / maxReps) * bonusMax
  }

  const _totalHealthMaxBoost = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    const bonusMax = getFeatureByType('health').bonusMax
    return bonusMax
  }

  const _totalHealthBoostInPercent = () => {
    if (Object.keys(getters.getFeatures).length === 0) {
      return 0
    }
    return (_totalHealthBoost() / _totalHealthMaxBoost()) * 100
  }

  return {
    getTotalHealthBoostInPercent: computed(() => Math.ceil(_totalHealthBoostInPercent())),
    getTotalHealthBoost: computed(() => Math.ceil(_totalHealthBoost())),
    _totalHealthBoost,
    _totalHealthMaxBoost,
    _totalHealthBoostInPercent
  }
}
