
// import { useRouter } from 'vue-router'
import { useStore } from 'src/store'
import { ActionTypes } from 'src/store/module-feature/actions'
import { FeatureUpdate } from 'src/models/types/feature'

export default function useActions () {
  // const router = useRouter()
  const store = useStore()

  function updateFeature (updateFeature: FeatureUpdate) {
    return store.dispatch(ActionTypes.UPDATE_FEATURE, updateFeature)
  }

  return {
    updateFeature
  }
}
