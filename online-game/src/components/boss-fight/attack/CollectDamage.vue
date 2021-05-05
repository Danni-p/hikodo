<template>
<div>
  <div class="text-h4 text-center q-pb-md">Bündelt eure Kräfte!</div>
  <div class="">
    <q-list dense bordered padding class="rounded-borders">
    <q-item
      v-for="(part, idx) in powerParts" :key="idx">
      <q-item-section>
        {{idx}}. <span class="text-subtitle2" style="display:contents">{{part}} Einheiten</span>
      </q-item-section>
      <q-item-section avatar>
          <q-btn dense flat color="primary" icon="eva-close" @click="handleDelete(idx)"/>
        </q-item-section>
    </q-item>
    </q-list>
    <div class="row">
      <q-card flat class="q-ml-auto q-mr-auto col-3">
        <q-card-section>
          <q-form @submit="(evt) => handleAddUnits()">
            <q-input
              ref="addRepsInputRef"
              dense
              type="number"
              :rules="[ integerRule ]"
              outlined
              v-model="addUnits" />
            <q-btn
              flat
              class="full-width"
              color="primary"
              label="Hinzufügen"
              type="submit"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div class="text-center">
    <q-btn
      flat
      class="full-widths"
      color="primary"
      :label="`Angriff ausführen (${sum} Einheiten)`"
      @click="handleExecuteAttack()"
    />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed } from 'vue'
import useBossfight from 'src/use/useBossfight'
import { integerRule } from 'src/validations'
import { AttackState, FightState } from 'src/models/types/bossfight'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
  },
  props: {
  },
  setup () {
    const powerParts: Ref<number[]> = ref([])
    const {
      setAttackState,
      setTotalAttackDamage,
      setBossHPs,
      setFightState,
      setMyHPs,
      getMyHPs,
      getMyMaxHPs,
      getBossHPs,
      healedHPs,
      damageHPs
    } = useBossfight()
    const addUnits = ref(0)

    const sum = computed(() => {
      return powerParts.value.reduce((prev, cur) => prev + cur, 0)
    })
    function handleAddUnits () {
      powerParts.value.push(+addUnits.value)
      addUnits.value = 0
    }

    function handleDelete (idx: number) {
      powerParts.value.splice(idx, 1)
    }

    function handleExecuteAttack () {
      setTotalAttackDamage(sum.value)
      setAttackState(AttackState.FINISH_ATTACK)
      const bossHealth = getBossHPs.value - damageHPs.value
      const myHealth = getMyHPs.value + healedHPs.value
      setBossHPs(bossHealth < 0 ? 0 : bossHealth)
      setMyHPs(myHealth < getMyMaxHPs.value ? myHealth : getMyMaxHPs.value)
      if (getBossHPs.value === 0) {
        setFightState(FightState.WIN)
      }
    }

    return {
      powerParts,
      integerRule,
      sum,
      handleAddUnits,
      addUnits,
      handleDelete,
      handleExecuteAttack
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
