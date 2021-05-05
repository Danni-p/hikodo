<template>
<div>
  <div class="text-h4 text-center q-pb-md">Wie viele Personen möchten heilen?</div>
  <q-form @submit="(evt) => handleSetHealer()">
    <div class="q-px-xl q-pt-lg text-center">
      <q-slider
        v-model="healerNr"
        label-always
        snap
        :min="0"
        :max="+getAttendees" />
        <q-btn
          flat
          class="full-widths"
          color="primary"
          label="Weiter zum Kampf"
          type="submit"
        />
    </div>
  </q-form>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { integerRule } from 'src/validations'
import useBossfight from 'src/use/useBossfight'
import { AttackState } from 'src/models/types/bossfight'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
  },
  props: {
  },
  setup () {
    const healerNr = ref(0)

    const { getAttendees, setAttackState, setHealers } = useBossfight()

    function handleSetHealer () {
      setAttackState(AttackState.CHOOSE_TECHNIQUE)
      setHealers(healerNr.value)
    }

    return {
      healerNr,
      integerRule,
      handleSetHealer,
      getAttendees
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
