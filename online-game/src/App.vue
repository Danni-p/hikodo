<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import ApiClient from 'src/api-client'
import authCallbacks from 'src/use/cbcks/authCallbacks'
import featureCallbacks from 'src/use/cbcks/featureCallbacks'
import activityCallbacks from 'src/use/cbcks/activityCallbacks'

export default defineComponent({
  name: 'App',
  setup () {
    const { loginCallback, logoutCallback } = authCallbacks()
    const { updateFeatureCallback, addFeatureCallback } = featureCallbacks()
    const { addActivityCallback, updateActivityCallback, deleteActivityCallback } = activityCallbacks()

    onMounted(() => {
      ApiClient.authService.authListenerOn(loginCallback, logoutCallback)
      ApiClient.featureService.featureListenerOn(addFeatureCallback, updateFeatureCallback)
      ApiClient.activityService.activityListenerOn(addActivityCallback, updateActivityCallback, deleteActivityCallback)
    })

    return {

    }
  }
})
</script>
