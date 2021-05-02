
import { computed } from 'vue'
// import { useRouter } from 'vue-router'
import { useStore } from 'src/store'
import { FeatureType } from 'src/models/types/feature'

export default function useGetters () {
  // const router = useRouter()
  const { getters } = useStore()

  const getDetailsText = (type: FeatureType) => {
    return getters.getDetailsTexts[type]
  }

  const getFeatureByType = (type: FeatureType) => {
    const result = Object.values(getters.getFeatures).find((val) => val.type === type)
    if (!result) {
      throw Error('Feature does not exist in Database!')
    }
    return result
  }

  const getFeatureById = (id: string) => {
    const result = getters.getFeatures[id]
    if (!result) {
      throw Error('Feature does not exist in Database!')
    }
    return result
  }

  return {
    getFeatures: computed(() => getters.getFeatures),
    getDetailsText,
    getFeatureByType,
    getFeatureById
  }
}
