
// import { useRouter } from 'vue-router'
import { FeatureType } from 'src/models/types/feature'
import { useStore } from 'src/store'
import { ActionTypes } from 'src/store/module-profile/actions'
import { calculateBoost } from 'src/utils/profileUtils'

export default function useActions () {
  // const router = useRouter()
  const store = useStore()

  async function setSkillLevel (id: FeatureType, lvl: number) {
    const boost = calculateBoost(id, lvl)
    await store.dispatch(ActionTypes.SET_SKILL_LEVEL, { id: id, level: lvl })
    await store.dispatch(ActionTypes.SET_SKILL_BOOST, { id: id, boost: boost })
  }

  return {
    setSkillLevel
  }
}
