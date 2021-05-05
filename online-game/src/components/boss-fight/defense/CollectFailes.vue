<template>
<div>
  <div class="text-h4 text-center q-pb-md">Wie viele mussten bei diesem schweren Angriff das Handtuch werfen?</div>
  <div class="text-center">
    <q-form @submit="(evt) => handleCalculateDamage()">
        <q-slider
        v-model="failes"
        label-always
        snap
        :min="0"
        :max="+getAttendees" />
        <q-btn
          flat
          class="full-widths"
          color="primary"
          label="Schaden ansehen"
          type="submit"
        />
      </q-form>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useBossfight from 'src/use/useBossfight'

import { integerRule } from 'src/validations'
import { DefenseState } from 'src/models/types/bossfight'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
  },
  props: {
  },
  setup () {
    const failes = ref(0)
    const {
      setDefenseState,
      setDefenseFailes,
      getAttendees,
      damageBossHPs,
      getMyHPs,
      setMyHPs
    } = useBossfight()

    function handleCalculateDamage () {
      setDefenseFailes(failes.value)
      const myHealth = getMyHPs.value - damageBossHPs.value
      setMyHPs(myHealth < 0 ? 0 : myHealth)
      setDefenseState(DefenseState.FINISH_DEFENSE)
    }

    return {
      failes,
      integerRule,
      handleCalculateDamage,
      getAttendees
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
