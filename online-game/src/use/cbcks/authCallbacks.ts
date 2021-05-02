
import { useStore } from 'src/store'
import { LoginCallback, LogoutCallback } from '../../models/api-client/auth-service'
import { MutationTypes as AuthMutationTypes } from 'src/store/module-auth/mutations'

export default function authCallbacks () {
  const store = useStore()

  const loginCallback: LoginCallback = (userId: string) => {
    console.log('loginCallback was called!', userId)
    store.commit(AuthMutationTypes.SET_USER_AUTHENTICATED, true)
  }

  const logoutCallback: LogoutCallback = () => {
    store.commit(AuthMutationTypes.SET_USER_AUTHENTICATED, false)
  }

  return {
    loginCallback,
    logoutCallback
  }
}
