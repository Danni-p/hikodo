<template>
<div>
  <div class="text-center">
    <q-avatar class="" size="100px">
      <img class="circle-icon" :src="$props.srcPath">
  </q-avatar>
  </div>
  <div class="text-subtitle2 text-center" style="width">{{$props.hps}} LP</div>
  <q-linear-progress :color="$props.color" size="25px" :value="hps" class="q-mt-sm" />
  <div class="text-subtitle1 text-center" style="width">{{$props.name}}</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
/* import useBossfight from '../../use/useBossfight' */

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    hps: {
      type: Number,
      required: true
    },
    srcPath: {
      type: String,
      required: true
    }
  },
  setup () {
    /*     const { setAttendees } = useBossfight() */

    return {
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
