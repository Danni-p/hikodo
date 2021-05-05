<template>
<div>
  <div class="text-h4 text-center q-pb-md">Boss greift an mit:</div>
  <div v-if="technique" class="row">
    <technique  class="q-ml-auto q-mr-auto" :technique="technique" :srcPath="getAttackImage(technique.id)"/>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from 'vue'
import TechniqueComp from './choose-technique/DefenseTechnique.vue'
import useBossfight from 'src/use/useBossfight'
import { getAttackImage, chooseRandomId } from 'src/utils/bossfightUtils'
import { Technique } from 'src/models/types/bossfight'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
    technique: TechniqueComp
  },
  props: {
  },
  setup () {
    const { getBossTechniqueById, getBossAttackIds } = useBossfight()
    const technique = ref(null) as Ref<Technique | null>
    onMounted(() => {
      technique.value = getBossTechniqueById(chooseRandomId(getBossAttackIds()))
    })

    return {
      technique,
      getAttackImage
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
