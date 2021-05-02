import firebase from 'firebase'
import { LoginCallback, LogoutCallback } from './AuthService.model'

/**
* @Name ItemsApiClientInterface
* @description
* Interface for the Items api client module
*/
export interface AuthServiceInterface {
  loginUserWithPassword: (password: string) => Promise<firebase.auth.UserCredential>
  logoutUser: () => Promise<void>
  authListenerOn: (loginCallback: LoginCallback, logoutCallback: LogoutCallback) => void
  authListenerOff: () => void
  currentUser: () => firebase.User | null
  asyncCurrentUser: () => Promise<firebase.User | null>
  asyncCurrentUserId: () => Promise<string>
}
