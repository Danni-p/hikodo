import { createStore } from 'vuex'
import { Store as AuthStore, authModule } from './module-auth'
import { AuthStateInterface } from './module-auth/state'

import { Store as FeatureStore, featureModule } from './module-feature'
import { FeatureStateInterface } from './module-feature/state'

export interface StateInterface {
  authState: AuthStateInterface;
  featureState: FeatureStateInterface;
}

export type Store = AuthStore<Pick<StateInterface, 'authState'>> &
                    FeatureStore<Pick<StateInterface, 'featureState'>>;

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store // Store<StateInterface>
  }
}

// provide typings for `useStore` helper
// export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export const store = createStore({
  modules: {
    authModule,
    featureModule
  },
  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: !!process.env.DEBUGGING
})

export function useStore () {
  return store as Store
  // return vuexUseStore(storeKey)
}

export default store
