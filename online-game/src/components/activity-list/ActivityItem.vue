<template>
<!-- <q-item>
  <q-btn
  class="full-width"
  label="Logout"
/>
</q-item> -->

  <q-item>
    <q-item-section avatar>
      <q-icon :name="getIcon($props.activity.type)" />
    </q-item-section>
    <q-item-section >
      <q-item-label overline>{{handleFormatDate()}}</q-item-label>

      <q-item-label v-if="$props.activity.type === 'attack'">
        Ein Doling hat {{$props.activity.count}} Klimmzüge gemacht.
      </q-item-label>

      <q-item-label v-else-if="$props.activity.type === 'defense'">
        Ein Doling hat {{$props.activity.count}} Burpees gemacht.
      </q-item-label>

      <q-item-label v-else-if="$props.activity.type === 'health'">
        Ein Doling hat {{$props.activity.count}} Minuten Wu Chi gehalten.
      </q-item-label>

      <q-item-label v-else-if="$props.activity.type === 'healing'">
        Ein Doling hat {{$props.activity.count}} Minuten meditiert.
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Activity } from 'src/models/types/activity'
import { defineComponent, PropType } from 'vue'
import useFeature from 'src/use/useFeature'

export default defineComponent({
  props: {
    activity: {
      type: Object as PropType<Activity>,
      required: true
    }
  },
  setup (props) {
    const { getIcon } = useFeature()

    function handleFormatDate () {
      const date = props.activity.time.toDate()
      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      const hour = date.getHours()
      const min = date.getMinutes()
      return `${day}.${month + 1}.${year} - ${hour}:${min} Uhr`
    }
    return {
      getIcon,
      handleFormatDate
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
