
import { useStore } from 'src/store'
import { SkillCallback } from '../../models/api-client/profile-service'
import { MutationTypes } from 'src/store/module-profile/mutations'
import { SkillWithId } from 'src/models/types/profile'

export default function profileCallbacks () {
  const store = useStore()

  const addSkillCallback: SkillCallback = (skillWithId: SkillWithId) => {
    store.commit(MutationTypes.ADD_SKILL, skillWithId)
  }

  const updateSkillCallback: SkillCallback = (skillWithId: SkillWithId) => {
    store.commit(MutationTypes.UPDATE_SKILL, skillWithId)
  }

  return {
    addSkillCallback,
    updateSkillCallback
  }
}
