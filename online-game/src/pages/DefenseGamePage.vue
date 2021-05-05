<template>
  <q-page class=" q-pa-md flex row items-center justify-evenly">
    <q-card class="col-12 col-sm-6 col-md-8">
      <q-card-section>
        <boss-fight />
      </q-card-section>
    </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="eva-refresh" color="accent" @click="resetDefenseGame()"/>
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BossFight from '../components/BossFight.vue'
import HealthBar from '../components/boss-fight/HealthBar.vue'
import useBossfight from '../use/useBossfight'

export default defineComponent({
  name: 'BossFightPage',
  components: {
    BossFight,
    HealthBar
  },
  setup () {
    const { getBossHPs, getMyHPs, getMyMaxHPs, getBossMaxHPs, resetFight } = useBossfight()
    return {
      getBossHPs,
      getMyHPs,
      getMyMaxHPs,
      getBossMaxHPs,
      resetFight
    }
  }
})
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
</style>
