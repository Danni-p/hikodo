import { FeatureUpdate } from 'src/models/types/feature'
import { FeatureCallback } from './FeatureService.model'

/**
* @Name ItemsApiClientInterface
* @description
* Interface for the Items api client module
*/
export interface FeatureServiceInterface {
  updateFeature: (updateFeature: FeatureUpdate) => Promise<void>
  featureListenerOn: (addFeatureCallback: FeatureCallback, updateFeatureCallback: FeatureCallback) => void
  featureListenerOff: () => void
}
