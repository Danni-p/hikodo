<template>
  <q-page class=" q-pa-md flex row items-center justify-evenly">
    <div class="col-12 col-sm-3 col-md-2 q-px-lg">
      <health-bar
        v-if="getBossHPs >= 0"
        :hps="getBossHPs"
        :maxhps="getBossMaxHPs"
        color="primary"
        name="Boss"
        srcPath="boss.svg" />
    </div>
    <q-card class="col-12 col-sm-6 col-md-8">
      <q-card-section>
        <boss-fight />
      </q-card-section>
    </q-card>
    <div class="col-12 col-sm-3 col-md-2 q-px-lg">
      <health-bar
        v-if="getMyHPs >= 0"
        :hps="getMyHPs"
        :maxhps="getMyMaxHPs"
        color="secondary"
        name="Drache"
        srcPath="dragons/dragon3.svg" />
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="eva-refresh" color="accent" @click="resetFight()"/>
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
