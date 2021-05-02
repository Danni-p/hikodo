<template>
<!-- <q-item>
  <q-btn
  class="full-width"
  label="Logout"
/>
</q-item> -->

  <q-item
    clickable
    @click="logout">
    <q-item-section avatar>
      <q-icon name="eva-log-out-outline" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Logout</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useAuth from '../../use/useAuth'

export default defineComponent({
  setup () {
    const { logout } = useAuth()
    return {
      logout
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
