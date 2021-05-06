<template>
  <q-page class=" q-pa-md flex row items-center justify-evenly">
    <div class="col">
      <div class="q-pl-xl">Drachenattacken</div>
      <dragon-chart/>
    </div>
    <div class="col">
      <div class="q-pl-xl">Bossattacken</div>
      <boss-chart/>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DragonChart from 'src/components/statistics/DragonChart.vue'
import BossChart from 'src/components/statistics/BossChart.vue'

export default defineComponent({
  components: {
    DragonChart,
    BossChart
  },
  setup () {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
