
// import { useRouter } from 'vue-router'
import { useStore } from 'src/store'
import { ActionTypes as ActivityActionTypes } from 'src/store/module-activity/actions'
import { ActionTypes as FeatureActionTypes } from 'src/store/module-feature/actions'
import { ActionTypes as BossfightActionTypes } from 'src/store/module-bossfight/actions'
import { FeatureUpdate } from 'src/models/types/feature'
import { Activity } from 'src/models/types/activity'

export default function useActions () {
  // const router = useRouter()
  const store = useStore()

  function updateFeature (updateFeature: FeatureUpdate) {
    return store.dispatch(FeatureActionTypes.UPDATE_FEATURE, updateFeature).then(() => {
      store.dispatch(BossfightActionTypes.RESET_FIGHT, undefined)
    })
  }

  async function updateFeatureWithTracking (updateFeature: FeatureUpdate, activity: Activity) {
    await store.dispatch(FeatureActionTypes.UPDATE_FEATURE, updateFeature)
    await store.dispatch(ActivityActionTypes.ADD_ACTIVITY, activity)
    store.dispatch(BossfightActionTypes.RESET_FIGHT, undefined)
  }

  return {
    updateFeature,
    updateFeatureWithTracking
  }
}
