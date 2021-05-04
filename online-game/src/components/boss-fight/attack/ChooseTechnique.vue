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
import TechniqueComp from '../Technique.vue'
import useBossfight from 'src/use/useBossfight'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
    technique: TechniqueComp
  },
  props: {
  },
  setup () {
    const { getMyTechniques } = useBossfight()
    const getAttackImage = (id: string) => {
      if (id === '1') {
        return 'attacks/fire.svg'
      } else if (id === '2') {
        return 'attacks/tail.svg'
      }
    }
    return {
      getMyTechniques,
      getAttackImage
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
