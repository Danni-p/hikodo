<template>
<div>
  <div class="text-h4 text-center q-pb-md">Womit wollt ihr angreifen?</div>
  <div class="row">
    <div class="col q-pa-sm" v-for="tech in getMyTechniques" :key="tech.name">
      <technique :technique="tech" :srcPath="getAttackImage(tech.id)"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TechniqueComp from './AttackTechnique.vue'
import useBossfight from 'src/use/useBossfight'
import { getAttackImage } from 'src/utils/bossfightUtils'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
    technique: TechniqueComp
  },
  props: {
  },
  setup () {
    const { getMyTechniques } = useBossfight()
    return {
      getMyTechniques,
      getAttackImage
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
