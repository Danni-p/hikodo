<template>
<div>
  <div class="center text-center q-pb-sm">
      <skill :featureType="'attack'"/>
  </div>
  <div class="center text-center">
      <span class="q-pr-sm">
        <skill :featureType="'defense'"/>
    </span>
      <q-avatar class="col" size="200px">
        <!-- src="https://cdn.quasar.dev/img/avatar.png" -->
      <img class="circle-icon" :src="dragonImageSrc">
    </q-avatar>
    <span class="q-pl-sm">
        <skill :featureType="'health'"/>
    </span>
  </div>
  <div class="center text-center q-pt-sm">
      <skill :featureType="'healing'"/>
  </div>

  <div class="center q-pt-lg">
    <div class="text-h6">Stärkestufen</div>
    <special-skill :featureType="'attack'" name="Drachenfeuer" :level="getAttackSkillLevel"/>
    <special-skill :featureType="'defense'" name="Panzerung" :level="getDefenseSkillLevel"/>
    <special-skill :featureType="'healing'" name="Heilzauber" :level="getHealingSkillLevel"/>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Skill from './profile/Skill.vue'
import SpecialSkill from './profile/SpecialSkill.vue'
import useProfile from '../use/useProfile'
/* import { FeatureType } from '../models/types/feature' */

export default defineComponent({
  components: {
    Skill,
    SpecialSkill
  },
  props: {
  },
  setup () {
    const {
      getAttackSkillLevel,
      getDefenseSkillLevel,
      getHealingSkillLevel,
      getTotalPowerInPercent
    } = useProfile()

    const dragonImageSrc = computed(() => {
      if (getTotalPowerInPercent.value < 17.5) {
        return 'dragons/dragon0.svg'
      } else if (getTotalPowerInPercent.value < 35) {
        return 'dragons/dragon1.svg'
      } else if (getTotalPowerInPercent.value < 52.5) {
        return 'dragons/dragon2.svg'
      } else if (getTotalPowerInPercent.value < 70) {
        return 'dragons/dragon3.svg'
      } else if (getTotalPowerInPercent.value < 87.5) {
        return 'dragons/dragon4.svg'
      } else {
        return 'dragons/dragon5.svg'
      }
    })
    /* function handleSkillLevel (id: FeatureType) {
      return getSkillLevel(id)
    } */
    return {
      getAttackSkillLevel,
      getDefenseSkillLevel,
      getHealingSkillLevel,
      dragonImageSrc
    }
  }
})
</script>

<style lang="scss" scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.circle-icon {
    background: rgb(243, 243, 243);
    padding:30px;
    border-radius: 50%;
}
</style>
