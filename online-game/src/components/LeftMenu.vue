<template>
  <div class="bg-grey-2">
    <q-list items-center>
      <logout-item />
      <q-separator color="grey-5"/>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoutItem from './left-menu/LogoutItem.vue'

export default defineComponent({
  components: {
    LogoutItem
  },
  setup () {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
