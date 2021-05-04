
// import { useRouter } from 'vue-router'
import { FeatureType } from 'src/models/types/feature'
import { useStore } from 'src/store'
import { ActionTypes as ProfileActionTypes } from 'src/store/module-profile/actions'
import { ActionTypes as BossfightActionTypes } from 'src/store/module-bossfight/actions'
import { calculateBoost } from 'src/utils/profileUtils'

export default function useActions () {
  // const router = useRouter()
  const store = useStore()

  async function setSkillLevel (id: FeatureType, lvl: number) {
    const boost = calculateBoost(id, lvl)
    await store.dispatch(ProfileActionTypes.SET_SKILL_LEVEL, { id: id, level: lvl })
    await store.dispatch(ProfileActionTypes.SET_SKILL_BOOST, { id: id, boost: boost })
    store.dispatch(BossfightActionTypes.RESET_FIGHT, undefined)
  }

  return {
    setSkillLevel
  }
}
