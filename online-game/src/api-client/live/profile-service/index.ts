import {
  ProfileServiceInterface,
  ProfileServiceModel
} from 'src/models/api-client/profile-service'

/* import { config } from '@/config' */

// instantiate the ItemsApiClient pointing at the url that returns the live data from an API server
const profileService: ProfileServiceInterface = new ProfileServiceModel()
// export our instance
export default profileService
