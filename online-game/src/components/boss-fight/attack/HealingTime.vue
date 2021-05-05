<template>
<div>
  <div class="text-h4 text-center q-pb-md">Macht euch bereit zum Heilen!</div>
  <div class="text-h6 text-center q-pb-md text-grey">Heilzauber</div>
  <div class="text-center">
    <timer :minutes="1" :seconds="0"/>
  </div>
  <div class="text-center">
    <q-btn
      flat
      class="full-widths"
      color="primary"
      label="Heilung bestimmen"
      @click="handleHealingAction()"
    />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBossfight from 'src/use/useBossfight'
import Timer from 'src/components/boss-fight/Timer.vue'
import { AttackState } from 'src/models/types/bossfight'

export default defineComponent({
  components: {
    Timer
  },
  props: {
  },
  setup () {
    const {
      setAttackState,
      setTotalAttackDamage,
      setMyHPs,
      getMyHPs,
      healedHPs,
      getMyMaxHPs
    } = useBossfight()

    function handleHealingAction () {
      setTotalAttackDamage(0)
      setAttackState(AttackState.FINISH_ATTACK)
      const myHealth = getMyHPs.value + healedHPs.value
      setMyHPs(myHealth < getMyMaxHPs.value ? myHealth : getMyMaxHPs.value)
    }

    return {
      handleHealingAction
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
