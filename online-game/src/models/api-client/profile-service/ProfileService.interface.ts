import { FeatureType } from 'src/models/types/feature'
import { SkillCallback } from './ProfileService.model'

/**
* @Name ItemsApiClientInterface
* @description
* Interface for the Items api client module
*/
export interface ProfileServiceInterface {
  setSkillLevel: (id: FeatureType, lvl: number) => Promise<void>
  setSkillBoost: (id: FeatureType, boost: number) => Promise<void>
  skillListenerOn: (addSkillCallback: SkillCallback, updateSkillCallback: SkillCallback) => void
  skillListenerOff: () => void
}
