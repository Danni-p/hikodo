
import { computed } from 'vue'
// import { useRouter } from 'vue-router'
import { useStore } from 'src/store'

export default function useGetters () {
  // const router = useRouter()
  const { getters } = useStore()

  return {
    isAuthenticated: computed(() => getters.isAuthenticated)
  }
}
