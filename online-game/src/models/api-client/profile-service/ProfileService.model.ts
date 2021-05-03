import { firebaseDB } from 'src/boot/firebase'
import { ProfileServiceInterface } from './ProfileService.interface'
import { FeatureType } from 'src/models/types/feature'
import { Skill, SkillWithId } from 'src/models/types/profile'

export type SkillCallback = (skillWithId: SkillWithId) => void

export class ProfileServiceModel implements ProfileServiceInterface {
  private skillListener: (() => void) | null = null

  async setSkillLevel (id: FeatureType, lvl: number) {
    await firebaseDB.collection('skills').doc(id).update({ level: lvl })
  }

  async setSkillBoost (id: FeatureType, boost: number) {
    await firebaseDB.collection('skills').doc(id).update({ boost: boost })
  }

  skillListenerOn (addSkillCallback: SkillCallback, updateSkillCallback: SkillCallback) {
    this.skillListener = firebaseDB.collection('skills').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const skillId = <FeatureType>change.doc.id
        const skill = <Skill>change.doc.data()
        const skillWithId: SkillWithId = { id: skillId, ...skill }
        if (change.type === 'added') {
          addSkillCallback(skillWithId)
        }
        if (change.type === 'modified') {
          updateSkillCallback(skillWithId)
        }
        if (change.type === 'removed') {
          throw Error('remove Skill not yet implemented!')
        }
      })
    })
  }

  skillListenerOff () {
    if (this.skillListener) {
      this.skillListener()
    }
  }
}
