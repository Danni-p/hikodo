<template>
  <div class="row">
    <div class="col-10">
      <start v-if="getDefenseGameState === 'unknown'"/>
      <exercise-time v-else-if="getDefenseGameState === 'exercise'"/>
      <game-over v-else-if="getDefenseGameState === 'gameOver'"/>
    </div>
    <div class="col">
      <result-list />
    </div>
    <!-- <start v-show="getDefenseGameState === 'unknown'"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDefenseGame from 'src/use/useDefenseGame'
import ExerciseTime from 'src/components/defense-game/ExerciseTime.vue'
import GameOver from 'src/components/defense-game/GameOver.vue'
import Start from 'src/components/defense-game/Start.vue'
import ResultList from 'src/components/defense-game/ResultList.vue'

export default defineComponent({
  components: {
    Start,
    ExerciseTime,
    GameOver,
    ResultList
  },
  props: {
  },
  setup () {
    const { getDefenseGameState } = useDefenseGame()
    return {
      getDefenseGameState
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
