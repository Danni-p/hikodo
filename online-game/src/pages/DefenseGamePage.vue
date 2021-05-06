<template>
  <q-page class=" q-pa-md flex row items-center justify-evenly">
    <q-card class="col-12 col-sm-6 col-md-8">
      <q-card-section>
        <defense-game />
      </q-card-section>
    </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="eva-refresh" color="accent" @click="resetDefenseGame()"/>
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DefenseGame from '../components/DefenseGame.vue'
import useDefenseGame from '../use/useDefenseGame'

export default defineComponent({
  name: 'BossFightPage',
  components: {
    DefenseGame
  },
  setup () {
    const { resetDefenseGame } = useDefenseGame()
    return {
      resetDefenseGame
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
