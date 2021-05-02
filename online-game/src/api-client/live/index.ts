import { ApiClientInterface } from 'src/models/api-client/ApiClient.interface'
import AuthService from './auth-service'
import FeatureService from './feature-service'

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: ApiClientInterface = {
  authService: AuthService,
  featureService: FeatureService
}
// export our instance
export default apiLiveClient