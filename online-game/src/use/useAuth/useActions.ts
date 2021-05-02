
import { useRouter } from 'vue-router'
import { useStore } from 'src/store'
import { ActionTypes } from 'src/store/module-auth/actions'

export default function useActions () {
  const router = useRouter()
  const store = useStore()

  function loginWithPassword (pwd: string) {
    return store.dispatch(ActionTypes.LOGIN, pwd).then(async () => {
      await router.push({ name: 'Home' }).catch(() => {
        // do Nothing if page is already activated
      })
    })
  }

  function logout () {
    console.log('trigger logout')
    return store.dispatch(ActionTypes.LOGOUT, undefined).then(async () => {
      await router.push({ name: 'Home' }).catch((err: Error) => {
        // do Nothing if page is already activated
        console.log('nothing bad happened', err)
      })
    })
  }

  return {
    loginWithPassword,
    logout
  }
}
