<template>
<div>
  <div class="text-h5 q-pb-md">Bevor wir beginnen!</div>
  <div class="text-subtitle2 q-pb-sm">Wie viele Dolinge stellen sich dem Kampf?</div>
  <q-form @submit="(evt) => handleStartDefenseGame()">
    <div class="text-center">
      <q-input
        ref="attendeesRef"
        dense
        type="number"
        :rules="[ integerGreaterZeroRule ]"
        outlined
        v-model="attendees" />
      <q-btn
        flat
        color="primary"
        label="Los Gehts!"
        type="submit" />
    </div>
  </q-form>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { integerGreaterZeroRule } from '../../validations'
import useDefenseGame from 'src/use/useDefenseGame'
import { DefGameState } from 'src/models/types/defense-game'

export default defineComponent({
  props: {
  },
  setup () {
    const { setDefenseGameState, setDefGameAttendees } = useDefenseGame()
    const attendees = ref(1)
    const attendeesRef = ref()

    function handleStartDefenseGame () {
      if (attendees.value < 1) {
        return
      }
      setDefGameAttendees(attendees.value)
      setDefenseGameState(DefGameState.EXERCISE)
    }
    return {
      attendees,
      attendeesRef,
      integerGreaterZeroRule,
      handleStartDefenseGame
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
