<template>
  <div class="bg-grey-2">
    <div class="row">
      <div class="q-px-md q-pt-md text-h6 col-10">
        Letzte Aktivitäten
      </div>
      <div v-if="isAuthenticated" class="col-2 q-pt-sm">
        <q-btn
        flat
        round
        @click="removeAllActivities()"
        color="primary"
        icon="eva-trash"/>
      </div>
    </div>
    <q-separator class="q-my-sm"/>
    <q-list items-center>
      <div v-for="(activity) in activities" :key="activity.time">
        <activity-item :activity="activity"/>
      </div>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ActivityItem from './activity-list/ActivityItem.vue'
import useActivity from 'src/use/useActivity'
import useAuth from 'src/use/useAuth'

export default defineComponent({
  components: {
    ActivityItem
  },
  setup () {
    const { getActivities, removeAllActivities } = useActivity()
    const { isAuthenticated } = useAuth() 

    const activities = computed(() => {
      const acts = Object.values(getActivities.value)
      acts.sort((a, b) => {
        if (a.time.toMillis() < b.time.toMillis()) return 1
        else if (a.time.toMillis() > b.time.toMillis()) return -1
        else return 0
      })
      return acts
    })
    return {
      activities,
      removeAllActivities,
      isAuthenticated
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
