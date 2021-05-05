<template>
<div>
  <div class="text-h4 text-center q-pb-md">Angriffsschaden: {{damageBossHPs}} LPs</div>
  <div class="row q-pt-xl q-pb-md ">
    <div class="col-12 q-px-md text-center">
      <div class="text-center ">
        <q-btn
        color="primary"
        label="Angriff beenden"
        @click="handleEndAttack()"/>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent/* , computed */ } from 'vue'
import useBossfight from 'src/use/useBossfight'
/* import useProfile from 'src/use/useProfile'
import { calculateHealing, calculateMyDamageEffect } from 'src/utils/bossfightUtils' */
import { AttackState, DefenseState, FightState } from 'src/models/types/bossfight'

export default defineComponent({
  components: {
  },
  props: {
  },
  setup () {
    const {
      setAttackState,
      setFightState,
      setDefenseState,
      setAttackCycles,
      getAttackCycles,
      damageBossHPs
    } = useBossfight()
    /* const { getTotalHealingBoost, getTotalAttackBoost } = useProfile() */
    function handleEndAttack () {
      if (getAttackCycles.value > 0) {
        // another Defense Phase
        setDefenseState(DefenseState.CHOOSE_TECHNIQUE)
        setAttackCycles(getAttackCycles.value - 1)
      } else {
        // Go to Attack Phase
        setFightState(FightState.ATTACK)
        setDefenseState(DefenseState.UNKNOWN)
        setAttackState(AttackState.CHOOSE_HEALING)
      }
    }

    return {
      handleEndAttack,
      damageBossHPs
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
