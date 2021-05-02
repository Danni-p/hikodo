
// import { useRouter } from 'vue-router'
import { useStore } from 'src/store'
import { ActionTypes as ActivityActionTypes } from 'src/store/module-activity/actions'
import { ActionTypes as FeatureActionTypes } from 'src/store/module-feature/actions'
import { FeatureUpdate } from 'src/models/types/feature'
import { Activity } from 'src/models/types/activity'

export default function useActions () {
  // const router = useRouter()
  const store = useStore()

  function updateFeature (updateFeature: FeatureUpdate) {
    return store.dispatch(FeatureActionTypes.UPDATE_FEATURE, updateFeature)
  }

  async function updateFeatureWithTracking (updateFeature: FeatureUpdate, activity: Activity) {
    await store.dispatch(FeatureActionTypes.UPDATE_FEATURE, updateFeature)
    await store.dispatch(ActivityActionTypes.ADD_ACTIVITY, activity)
  }

  return {
    updateFeature,
    updateFeatureWithTracking
  }
}
