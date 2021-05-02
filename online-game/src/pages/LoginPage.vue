<template>
  <q-page class=" q-pa-md flex row items-center justify-evenly">
    <q-card class="full-width" style="max-width: 500px">
      <q-card-section>
        <div class="text-center text-h6">Gebe das geheime Geheimpasswort ein</div>
      </q-card-section>
      <q-card-section>
        <login />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Login from '../components/Login.vue'

export default defineComponent({
  name: 'LoginPage',
  components: {
    Login
  },
  setup () {
    return { }
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
