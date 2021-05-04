<template>
  <div>
    <start v-show="getFightState === 'unknown'"/>
    <defense v-show="getFightState === 'defense'"/>
    <attack v-show="getFightState === 'attack'"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Start from './boss-fight/Start.vue'
import Attack from './boss-fight/Attack.vue'
import Defense from './boss-fight/Defense.vue'
import useBossfight from '../use/useBossfight'

export default defineComponent({
  components: {
    Start,
    Attack,
    Defense
  },
  props: {
  },
  setup () {
    const { getFightState } = useBossfight()
    return {
      getFightState
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
