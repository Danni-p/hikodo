<template>
<div>
  <div class="text-h4 text-center q-pb-md">Spiel vorbei!</div>
  <div class="text-h6 text-center q-pb-md">Restliche Zeit: {{seconds2Minutes(getGameOverTime)}}:{{seconds2RestSeconds(getGameOverTime)}} min</div>
  <div class="text-h6 text-center q-pb-md">Das entspricht: {{percent}}%</div>
  <div class="text-center q-pb-md">
    <q-btn
      color="primary"
      @click="handleAnotherRound()"
      label="Noch eine Runde spielen" />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDefenseGame from 'src/use/useDefenseGame'
import { seconds2Minutes, seconds2RestSeconds } from 'src/utils/timerUtils'
import { DefGameState } from 'src/models/types/defense-game'

export default defineComponent({
  props: {
  },
  setup () {
    const {
      getGameOverTime,
      getDefaultMin,
      getDefaultSec,
      setDefenseGameState
    } = useDefenseGame()

    const percent = 100 - Math.round(getGameOverTime.value / (getDefaultMin.value * 60 + getDefaultSec.value) * 100)

    function handleAnotherRound () {
      console.log('another Round')
      setDefenseGameState(DefGameState.EXERCISE)
    }

    return {
      getGameOverTime,
      seconds2Minutes,
      seconds2RestSeconds,
      percent,
      handleAnotherRound
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
