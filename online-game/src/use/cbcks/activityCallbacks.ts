
import { useStore } from 'src/store'
import { ActivityCallback } from '../../models/api-client/activity-service'
import { MutationTypes as AuthMutationTypes } from 'src/store/module-activity/mutations'
import { ActivityWithId } from 'src/models/types/activity'

export default function authCallbacks () {
  const store = useStore()

  const addActivityCallback: ActivityCallback = (activityWithId: ActivityWithId) => {
    store.commit(AuthMutationTypes.ADD_ACTIVITY, activityWithId)
  }

  const updateActivityCallback: ActivityCallback = (activityWithId: ActivityWithId) => {
    store.commit(AuthMutationTypes.UPDATE_ACTIVITY, activityWithId)
  }

  const deleteActivityCallback: ActivityCallback = (activityWithId: ActivityWithId) => {
    store.commit(AuthMutationTypes.DELETE_ACTIVITY, activityWithId)
  }

  return {
    addActivityCallback,
    updateActivityCallback,
    deleteActivityCallback
  }
}
