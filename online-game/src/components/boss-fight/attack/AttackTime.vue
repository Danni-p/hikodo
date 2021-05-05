<template>
<div>
  <div class="text-h4 text-center q-pb-md">Macht euch bereit zum Angriff!</div>
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
import { AttackState } from 'src/models/types/bossfight'

export default defineComponent({
  components: {
    Timer
  },
  props: {
  },
  setup () {
    const {
      setAttackState,
      getSelectedAttackTechniqueId,
      getMyTechniqueById
    } = useBossfight()

    function handleCollectDamage () {
      setAttackState(AttackState.COLLECT_DAMAGE)
    }

    const exercise = computed(() => getMyTechniqueById(getSelectedAttackTechniqueId.value).exercise)

    const minutes = computed(() => getMyTechniqueById(getSelectedAttackTechniqueId.value).minutes)
    const seconds = computed(() => getMyTechniqueById(getSelectedAttackTechniqueId.value).seconds)

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
