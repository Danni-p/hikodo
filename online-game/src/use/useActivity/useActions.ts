
// import { useRouter } from 'vue-router'
import { useStore } from 'src/store'
import { ActionTypes } from 'src/store/module-activity/actions'

export default function useActions () {
  // const router = useRouter()
  const store = useStore()

  function removeAllActivities () {
    return store.dispatch(ActionTypes.REMOVE_ALL_ACTIVITIES, undefined)
  }

  return {
    removeAllActivities
  }
}
