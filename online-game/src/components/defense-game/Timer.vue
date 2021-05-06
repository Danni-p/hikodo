<template>
<div class="q-py-lg ">
  <div
    class="text-h1 text-center q-pb-md">
    <span>
      {{min}}
      <q-popup-edit
        v-model="min"
        @update:model-value="handleSetMinutes()"
        :validate="validateMinInput"
        v-slot="scope">
        <q-input
          type="number"
          ref="minInputRef"
          v-model="scope.value"
          dense
          :rules="[ requiredRule, integerRule ]"
          autofocus
          counter
          @keyup.enter="scope.set" />
      </q-popup-edit>
    </span>
    <span>: </span>
    <span>{{sec}}
      <q-popup-edit
        v-model="sec"
        :validate="validateSecInput"
        @update:model-value="handleSetSeconds()"
        v-slot="scope">
        <q-input
          type="number"
          ref="secInputRef"
          v-model="scope.value"
          dense
          :rules="[ requiredRule, integerRule, smaller60Rule ]"
          autofocus
          counter
          @keyup.enter="scope.set" />
      </q-popup-edit>
    </span>
  </div>
  <div class="text-center">
    <q-btn-toggle
      v-model="timerState"
      flat
      @update:model-value="(val) => handleToggle(val)"
      toggle-color="primary"
      :options="[
        {value:'stop',slot: 'stop'},
        {value:'pause',slot: 'pause'},
        {value:'play',slot: 'play'}
      ]">
      <template v-slot:play>
        <q-icon size="64px" name="eva-play-circle" />
      </template>
      <template v-slot:pause>
        <q-icon size="64px" name="eva-pause-circle" />
      </template>
      <template v-slot:stop>
        <q-icon size="64px" name="eva-stop-circle" />
      </template>
    </q-btn-toggle>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch, computed, onUnmounted } from 'vue'
import useDefenseGame from 'src/use/useDefenseGame'
import { calculateNextStep, formatSeconds } from 'src/utils/timerUtils'
import { requiredRule, integerRule, smaller60Rule } from 'src/validations'
import { DefGameState } from 'src/models/types/defense-game'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
  },
  props: {
  },
  setup () {
    const { getActiveAttendees, setGameOverTime, setDefenseGameState, addResult } = useDefenseGame()
    const minInputRef = ref()
    const secInputRef = ref()
    const defaultMin = ref('10')
    const defaultSec = ref('00')
    const min = ref(defaultMin.value)
    const sec = ref(defaultSec.value)
    const done = computed(() => min.value === '0' && sec.value === '00')
    const timerState = ref('stop')
    // eslint-disable-next-line no-undef
    const timer: Ref<NodeJS.Timeout | null> = ref(null)

    function validateMinInput () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      return minInputRef.value.validate()
    }

    function validateSecInput () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      return secInputRef.value.validate()
    }

    function handleSetMinutes () {
      defaultMin.value = min.value
    }

    function handleSetSeconds () {
      if (typeof requiredRule(sec.value) === 'string') {
        return
      }
      defaultSec.value = sec.value
    }

    function handleToggle (value: string) {
      if (value === 'play') {
        handlePlay()
      } else if (value === 'pause') {
        handlePause()
      } else if (value === 'stop') {
        handleStop()
      }
    }
    function handlePlay () {
      if (!done.value) {
        timer.value = setInterval(() => {
          console.log('test', getActiveAttendees.value)
          const nextStep = calculateNextStep(+min.value, +sec.value, getActiveAttendees.value, 0.1)
          min.value = nextStep.min.toString()
          sec.value = formatSeconds(nextStep.sec)
        }, 100)
      }
    }

    function handlePause () {
      if (timer.value) {
        clearInterval(timer.value)
      }
    }

    function handleStop () {
      if (timer.value) {
        console.log('stop')
        clearInterval(timer.value)
        min.value = defaultMin.value
        sec.value = defaultSec.value
      }
    }

    watch([min, sec], ([newMin, newSec]) => {
      // do whatever you want
      if (timer.value) {
        console.log('newSec', newSec)
        if ((Number.parseFloat(newMin) <= 0) && (Number.parseFloat(newSec) <= 0)) {
          clearInterval(timer.value)
          setGameOverTime(0)
          addResult(100)
          setDefenseGameState(DefGameState.GAME_OVER)
        }
      }
      setGameOverTime(Number.parseInt(newMin) * 60 + Number.parseInt(newSec))
    })

    watch(getActiveAttendees, () => {
      // do whatever you want
      if (timer.value) {
        handlePause()
        handlePlay()
      }
    })

    onUnmounted(() => {
      handleStop()
    })

    return {
      min,
      sec,
      done,
      timerState,
      handleToggle,
      integerRule,
      requiredRule,
      smaller60Rule,
      handleSetMinutes,
      handleSetSeconds,
      validateMinInput,
      minInputRef,
      secInputRef,
      validateSecInput
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
