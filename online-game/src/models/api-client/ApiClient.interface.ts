// GEN-IMPORTS
import { AuthServiceInterface } from './auth-service'
import { FeatureServiceInterface } from './feature-service'

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface ApiClientInterface {
  // GEN-PROPERTIES
  authService: AuthServiceInterface
  featureService: FeatureServiceInterface
}
