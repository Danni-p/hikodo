import { Skill } from 'src/models/types/profile'

export interface ProfileStateInterface {
  attackSkill: Skill
  defenseSkill: Skill
  healingSkill: Skill
}

function state (): ProfileStateInterface {
  return {
    attackSkill: {
      name: '',
      boost: 0,
      level: 0
    },
    defenseSkill: {
      name: '',
      boost: 0,
      level: 0
    },
    healingSkill: {
      name: '',
      boost: 0,
      level: 0
    }
  }
}

export default state
