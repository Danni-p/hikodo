import {
  FeatureServiceInterface,
  FeatureServiceModel
} from 'src/models/api-client/feature-service'

/* import { config } from '@/config' */

// instantiate the ItemsApiClient pointing at the url that returns the live data from an API server
const featureService: FeatureServiceInterface = new FeatureServiceModel()
// export our instance
export default featureService
