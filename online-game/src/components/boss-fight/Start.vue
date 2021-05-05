<template>
<div>
  <div class="text-h5 q-pb-md">Bevor wir beginnen!</div>
  <div class="text-subtitle2 q-pb-sm">Wie viele Dolinge stellen sich dem Kampf?</div>
  <q-form @submit="(evt) => handleStartBossfight()">
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
import useBossfight from '../../use/useBossfight'
import { attackOrDefense } from '../../utils/bossfightUtils'
import { useQuasar } from 'quasar'
import { AttackState, DefenseState } from 'src/models/types/bossfight'

export default defineComponent({
  props: {
  },
  setup () {
    const {
      initializeFight,
      setFightState,
      setAttackState,
      setDefenseState,
      setForce
    } = useBossfight()
    const $q = useQuasar()
    const attendees = ref(1)
    const attendeesRef = ref()

    function handleStartBossfight () {
      if (attendees.value < 1) {
        return
      }
      initializeFight(attendees.value)
      setTimeout(() => {
        setFightState(attackOrDefense())
        setAttackState(AttackState.CHOOSE_HEALING)
        setDefenseState(DefenseState.CHOOSE_TECHNIQUE)
        setForce(1)
        $q.loading.hide()
      }, 2500)
      $q.loading.show({
        message: 'Es wird nun berechnet, wer der mutigste ist und den ersten Angriff startet...'
      })
    }
    return {
      attendees,
      attendeesRef,
      integerGreaterZeroRule,
      handleStartBossfight
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
