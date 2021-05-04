<template>
<div>
  <div class="text-h4 text-center q-pb-md">Macht euch bereit zum Angriff!</div>
  <div class="text-center">
    <q-btn
      flat
      class="full-widths"
      color="primary"
      label="Schaden bestimmen"
      type="submit"
    />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useBossfight from 'src/use/useBossfight'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
  },
  props: {
  },
  setup () {
    /* const { getMyTechniques } = useBossfight() */
    return {
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
