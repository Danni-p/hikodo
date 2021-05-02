
import { useStore } from 'src/store'
import { FeatureCallback } from '../../models/api-client/feature-service'
import { MutationTypes as AuthMutationTypes } from 'src/store/module-feature/mutations'
import { FeatureWithId } from 'src/models/types/feature'

export default function authCallbacks () {
  const store = useStore()

  const addFeatureCallback: FeatureCallback = (featureWithId: FeatureWithId) => {
    store.commit(AuthMutationTypes.ADD_FEATURE, featureWithId)
  }

  const updateFeatureCallback: FeatureCallback = (featureWithId: FeatureWithId) => {
    store.commit(AuthMutationTypes.UPDATE_FEATURE, featureWithId)
  }

  return {
    addFeatureCallback,
    updateFeatureCallback
  }
}
