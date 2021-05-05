<template>
<div>
  <div class="text-h4 text-center q-pb-md">Macht euch bereit zum Angriff!</div>
  <div class="text-center">
    <timer :minutes="0" :seconds="10"/>
  </div>
  <div class="text-center">
    <q-btn
      flat
      class="full-widths"
      color="primary"
      label="Schaden bestimmen"
      @click="handleCollectDamage()"
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
    const { setAttackState } = useBossfight()
    function handleCollectDamage () {
      setAttackState(AttackState.COLLECT_DAMAGE)
    }

    return {
      handleCollectDamage
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
