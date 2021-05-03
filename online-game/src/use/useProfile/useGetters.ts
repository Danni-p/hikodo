import { computed } from 'vue'
import { useStore } from 'src/store'

export default function useGetters () {
  const { getters } = useStore()

  return {
    getAttackSkillLevel: computed(() => getters.getAttackSkill.level),
    getDefenseSkillLevel: computed(() => getters.getDefenseSkill.level),
    getHealingSkillLevel: computed(() => getters.getHealingSkill.level),
    getAttackSkillBoost: computed(() => getters.getAttackSkill.boost),
    getDefenseSkillBoost: computed(() => getters.getDefenseSkill.boost),
    getHealingSkillBoost: computed(() => getters.getHealingSkill.boost)
  }
}
