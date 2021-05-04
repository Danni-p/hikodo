<template>
<div>
  <choose-technique v-if="getAttackState === AttackState.CHOOSE_TECHNIQUE" />
  <choose-healing v-else-if="getAttackState === AttackState.CHOOSE_HEALING"/>
  <action-time v-else-if="getAttackState === AttackState.ACTION_TIME"/>
</div>
</template>

<script lang="ts">
import { AttackState } from 'src/models/types/bossfight'
import { defineComponent } from 'vue'
import useBossfight from '../../use/useBossfight'
import ChooseTechnique from './attack/ChooseTechnique.vue'
import ChooseHealing from './attack/ChooseHealing.vue'
import ActionTime from './attack/ActionTime.vue'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
    ChooseTechnique,
    ChooseHealing,
    ActionTime
  },
  props: {
  },
  setup () {
    const { getAttackState } = useBossfight()
    return {
      getAttackState,
      AttackState
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
