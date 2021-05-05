<template>
<div class="q-py-lg ">
  <div v-if="done" class="text-h1 text-center q-pb-md">
    Geschafft!
  </div>
  <div
    v-else
    class="text-h1 text-center q-pb-md">{{min}}:{{sec}}
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
import { defineComponent, ref, Ref, watch, computed } from 'vue'
/* import useBossfight from 'src/use/useBossfight' */
import { calculateNextStep, formatSeconds } from 'src/utils/timerUtils'
/* import { Technique } from '../../models/types/bossfight' */

export default defineComponent({
  components: {
  },
  props: {
    seconds: {
      type: Number,
      required: true
    },
    minutes: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const min = ref(props.minutes.toString())
    const sec = ref(formatSeconds(props.seconds))
    const done = computed(() => min.value === '0' && sec.value === '00')
    const timerState = ref('stop')
    // eslint-disable-next-line no-undef
    const timer: Ref<NodeJS.Timeout | null> = ref(null)

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
          console.log('trigger')
          const nextStep = calculateNextStep(+min.value, +sec.value)
          min.value = nextStep.min.toString()
          sec.value = formatSeconds(nextStep.sec)
        }, 1000)
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
        min.value = props.minutes.toString()
        sec.value = formatSeconds(props.seconds)
      }
    }

    watch([min, sec], ([newMin, newSec]) => {
      // do whatever you want
      if (timer.value) {
        if ((newMin === '0') && (newSec === '00')) {
          clearInterval(timer.value)
        }
      }
    })

    return {
      min,
      sec,
      done,
      timerState,
      handleToggle
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
