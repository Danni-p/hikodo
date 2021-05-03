// GEN-IMPORTS
import { ActivityServiceInterface } from './activity-service'
import { AuthServiceInterface } from './auth-service'
import { FeatureServiceInterface } from './feature-service'
import { ProfileServiceInterface } from './profile-service'

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface ApiClientInterface {
  // GEN-PROPERTIES
  authService: AuthServiceInterface
  featureService: FeatureServiceInterface
  activityService: ActivityServiceInterface
  profileService: ProfileServiceInterface
}
