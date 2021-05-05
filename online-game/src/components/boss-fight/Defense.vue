<template>
<div>
  <choose-technique v-if="getDefenseState === DefenseState.CHOOSE_TECHNIQUE"/>
  <defense-time v-if="getDefenseState === DefenseState.DEFENSE_TIME"/>
  <collect-failes v-if="getDefenseState === DefenseState.COLLECT_FAILES"/>
  <finish-defense v-if="getDefenseState === DefenseState.FINISH_DEFENSE"/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChooseTechnique from './defense/ChooseTechnique.vue'
import DefenseTime from './defense/DefenseTime.vue'
import CollectFailes from './defense/CollectFailes.vue'
import FinishDefense from './defense/FinishDefense.vue'
import { DefenseState } from 'src/models/types/bossfight'
import useBossfight from '../../use/useBossfight'

export default defineComponent({
  components: {
    ChooseTechnique,
    DefenseTime,
    CollectFailes,
    FinishDefense
  },
  setup () {
    const { getDefenseState } = useBossfight()
    return {
      DefenseState,
      getDefenseState
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
