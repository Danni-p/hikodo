<template>
<div>
  <q-list separator>
    <div v-for="(result, idx) in getResults" :key="idx">
      <q-item dense>
        <q-item-section>{{idx + 1}}.) {{result}}%</q-item-section>
      </q-item>
    </div>
    <q-item clickable v-ripple>
      <q-item-section>Durschnitt: {{average}}%</q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useDefenseGame from 'src/use/useDefenseGame'

export default defineComponent({
  props: {
  },
  setup () {
    const {
      getResults
    } = useDefenseGame()

    const average = computed(() => {
      const sum = getResults.value.reduce((a, b) => a + b, 0)
      const avg = (sum / getResults.value.length) || 0
      return Math.round(avg * 10) / 10
    })
    return {
      getResults,
      average
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
