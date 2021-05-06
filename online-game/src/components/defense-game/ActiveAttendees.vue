<template>
<div>
  <div class="text-h4 text-center q-pb-md">Aktive Dolinge</div>
  <q-form @submit="(evt) => activeAttendees--">
    <div class="q-px-xl q-pt-lg text-center">
      <q-slider
        v-model="activeAttendees"
        label-always
        snap
        :min="0"
        :max="+getDefGameAttendees" />
        <q-btn
          class="full-widths"
          color="primary"
          label="Ein Doling weniger"
          type="submit"
        />
    </div>
  </q-form>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import { integerRule } from 'src/validations'
import useDefenseGame from 'src/use/useDefenseGame'
import { DefGameState } from 'src/models/types/defense-game'

export default defineComponent({
  components: {
  },
  props: {
  },
  setup () {
    const {
      getDefGameAttendees,
      setActiveAttendees,
      setDefenseGameState,
      getDefaultMin,
      getDefaultSec,
      getGameOverTime,
      addResult
    } = useDefenseGame()
    const activeAttendees = ref(+getDefGameAttendees.value)

    onMounted(() => {
      setActiveAttendees(activeAttendees.value)
    })
    /* function updateActiveAttendees () {
      console.log('update')
    } */
    watch(activeAttendees, (newActive) => {
      setActiveAttendees(newActive)
      if (newActive === 0) {
        const result = 100 - Math.round((getGameOverTime.value / ((getDefaultMin.value * 60) + getDefaultSec.value)) * 100)
        addResult(result)
        setDefenseGameState(DefGameState.GAME_OVER)
      }
    })

    return {
      activeAttendees,
      integerRule,
      getDefGameAttendees
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
