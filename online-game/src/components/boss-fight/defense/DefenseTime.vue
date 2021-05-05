<template>
<div>
  <div class="text-h4 text-center q-pb-md">Macht euch bereit zum Verteidigen!</div>
  <div class="text-h6 text-center q-pb-md text-grey">Übung: {{exercise}}</div>
  <div class="text-center">
    <timer :minutes="minutes" :seconds="seconds"/>
  </div>
  <div class="text-center">
    <q-btn
      flat
      class="full-widths"
      color="primary"
      label="Schaden bestimmen"
      @click="handleCollectDamage()"
    />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useBossfight from 'src/use/useBossfight'
import Timer from 'src/components/boss-fight/Timer.vue'
import { DefenseState } from 'src/models/types/bossfight'

export default defineComponent({
  components: {
    Timer
  },
  props: {
  },
  setup () {
    const {
      setDefenseState,
      getSelectedAttackTechniqueId,
      getBossTechniqueById
    } = useBossfight()

    function handleCollectDamage () {
      setDefenseState(DefenseState.COLLECT_FAILES)
    }
    const exercise = computed(() => getBossTechniqueById(getSelectedAttackTechniqueId.value).exercise)

    const minutes = computed(() => getBossTechniqueById(getSelectedAttackTechniqueId.value).minutes)
    const seconds = computed(() => getBossTechniqueById(getSelectedAttackTechniqueId.value).seconds)

    return {
      handleCollectDamage,
      minutes,
      seconds,
      exercise
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
