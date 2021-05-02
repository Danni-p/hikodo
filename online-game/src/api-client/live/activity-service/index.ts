import {
  ActivityServiceInterface,
  ActivityServiceModel
} from 'src/models/api-client/activity-service'

/* import { config } from '@/config' */

// instantiate the ItemsApiClient pointing at the url that returns the live data from an API server
const activityService: ActivityServiceInterface = new ActivityServiceModel()
// export our instance
export default activityService
