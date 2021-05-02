import { firebaseAuth } from 'src/boot/firebase'
import firebase from 'firebase'
import { AuthServiceInterface } from './AuthService.interface'

export type LoginCallback = (userId: string) => void
export type LogoutCallback = () => void

export class AuthServiceModel implements AuthServiceInterface {
  private authListener: (() => void) | null = null
  private email = 'danielpascheka@web.de'

  loginUserWithPassword (password: string) {
    return firebaseAuth.signInWithEmailAndPassword(this.email, password)
  }

  logoutUser () {
    return firebaseAuth.signOut()
  }

  authListenerOn (loginCallback: LoginCallback, logoutCallback: LogoutCallback) {
    this.authListener = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        // TODO Login Callback Add all Listeners
        console.log('user logged in', user)
        loginCallback(user.uid)
      } else {
        // LOGOUT: Reset Data to initial State
        console.log('user logged out')
        logoutCallback()
      }
    })
  }

  authListenerOff () {
    if (this.authListener) {
      this.authListener()
    }
  }

  currentUser (): firebase.User | null {
    return firebaseAuth.currentUser
  }

  asyncCurrentUser (): Promise<firebase.User | null> {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
        unsubscribe()
        resolve(user)
      }, reject)
    })
  }

  async asyncCurrentUserId (): Promise<string> {
    const user = await this.asyncCurrentUser()
    return user?.uid || Promise.reject(new Error('Not able to find current User!'))
  }
}
