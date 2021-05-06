<template>
  <Chart
    :size="{ width: 500, height: 420 }"
    :data="data"
    :margin="margin"
    :direction="direction"
    :axis="axis">

    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Bar :dataKeys="['name', 'one']" :barStyle="{ fill: '#90e0ef' }" />
      <Bar :dataKeys="['name', 'five']" :barStyle="{ fill: '#48cae4' }" />
      <Bar :dataKeys="['name', 'ten']" :barStyle="{ fill: '#0096c7' }" />
<!--       <Marker :value="1000" label="Avg." color="#e76f51" strokeWidth="2" strokeDasharray="6 6" /> -->
    </template>

    <template #widgets>
      <Tooltip
        borderColor="#48CAE4"
        :config="{
          one: { color: '#90e0ef' },
          five: { color: '#48cae4' },
          ten: { color: '#0096c7' }
        }"
      />
    </template>

  </Chart>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Chart, Bar, Grid, Tooltip } from 'vue3-charts'
import useChart from 'src/use/useChart'

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Bar, Tooltip },
  setup () {
    const { getMyDamageData: data } = useChart()

    // const data = ref(plByMonth)
    const direction = ref('horizontal')
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    })

    const axis = ref({
      primary: {
        type: 'band'
      },
      secondary: {
        domain: ['dataMin', 'dataMax + 100'],
        type: 'linear',
        ticks: 8
      }
    })

    return { data, direction, margin, axis }
  }
})
</script>
