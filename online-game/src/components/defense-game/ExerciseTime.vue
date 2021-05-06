<template>
<div>
  <div class="text-h4 text-center q-pb-md">Macht euch bereit!</div>
  <div class="text-center">
    <timer/>
  </div>
  <div class="text-center">
    <active-attendees />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timer from './Timer.vue'
import ActiveAttendees from './ActiveAttendees.vue'

export default defineComponent({
  components: {
    Timer,
    ActiveAttendees
  },
  props: {
  },
  setup () {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
