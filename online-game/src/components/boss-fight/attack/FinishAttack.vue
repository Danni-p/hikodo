<template>
<div>
  <div v-if="damageHPs > 0" class="text-h4 text-center q-pb-md">Angriffsschaden: {{damageHPs}} LPs</div>
  <div v-if="healedHPs > 0" class="text-h4 text-center q-pb-xl">Heilzauber: {{healedHPs}} LPs
  </div>
  <div class="row">
    <div class="col-6 q-px-md text-center">
      <div class="text-h6 q-pb-md">Wollt ihr erneut Angreifen?</div>
      <div class="text-subtitle2">
         - 25% weniger Schaden <br />
         - 25% weniger Heilwirkung
      </div>
    </div>
    <div class="col-6 q-px-md text-center">
      <div class="text-h6 q-pb-md">Wollt ihr Verteidigen?</div>
      <div class="text-subtitle2">
         - 100% Schaden im nächsten Angriff
      </div>
    </div>
  </div>
  <div class="row q-pt-xl q-pb-md ">
    <div class="col-6 q-px-md text-center">
      <div class="text-center ">
        <q-btn
        :disable="getAttackCycles >= 2"
        color="primary"
        label="Angreifen mit geringer Durschlagskraft"
        @click="attackAgain()"/>
      </div>
    </div>
    <div class="col-6 q-px-md text-center">
      <div class="text-center">
        <q-btn
          color="primary"
          label="Verteidigen um Kräfte zu sparen"
          @click="handleGoToDefense()" />
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
      /* getHealers, */
      setForce,
      getForce,
      healedHPs,
      damageHPs,
      setDefenseState,
      setAttackCycles,
      getAttackCycles
    } = useBossfight()
    /* const { getTotalHealingBoost, getTotalAttackBoost } = useProfile() */
    function attackAgain () {
      setAttackState(AttackState.CHOOSE_HEALING)
      setForce(getForce.value - 0.25)
      setAttackCycles(getAttackCycles.value + 1)
    }

    function handleGoToDefense () {
      setFightState(FightState.DEFENSE)
      setAttackState(AttackState.CHOOSE_HEALING)
      setForce(1)
      setAttackCycles(Math.round(Math.random() * 3))
      setDefenseState(DefenseState.CHOOSE_TECHNIQUE)
    }

    return {
      attackAgain,
      healedHPs,
      handleGoToDefense,
      damageHPs,
      getAttackCycles
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
