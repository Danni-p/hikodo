import { ApiClientInterface } from 'src/models/api-client/ApiClient.interface'
import ActivityService from './activity-service'
import AuthService from './auth-service'
import FeatureService from './feature-service'
import ProfileService from './profile-service'

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: ApiClientInterface = {
  authService: AuthService,
  featureService: FeatureService,
  activityService: ActivityService,
  profileService: ProfileService
}
// export our instance
export default apiLiveClient
