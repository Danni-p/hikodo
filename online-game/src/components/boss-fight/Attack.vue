<template>
<div>
  <choose-healing v-if="getAttackState === AttackState.CHOOSE_HEALING"/>
  <choose-technique v-else-if="getAttackState === AttackState.CHOOSE_TECHNIQUE" />
  <action-time v-else-if="getAttackState === AttackState.ACTION_TIME"/>
  <collect-damage v-else-if="getAttackState === AttackState.COLLECT_DAMAGE"/>
  <finish-attack v-else-if="getAttackState === AttackState.FINISH_ATTACK"/>
</div>
</template>

<script lang="ts">
import { AttackState } from 'src/models/types/bossfight'
import { defineComponent } from 'vue'
import useBossfight from '../../use/useBossfight'
import ChooseTechnique from './attack/ChooseTechnique.vue'
import ChooseHealing from './attack/ChooseHealing.vue'
import ActionTime from './attack/ActionTime.vue'
import CollectDamage from './attack/CollectDamage.vue'
import FinishAttack from './attack/FinishAttack.vue'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
    ChooseTechnique,
    ChooseHealing,
    ActionTime,
    CollectDamage,
    FinishAttack
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
