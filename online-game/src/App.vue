<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import ApiClient from 'src/api-client'
import authCallbacks from 'src/use/cbcks/authCallbacks'
import featureCallbacks from 'src/use/cbcks/featureCallbacks'
import activityCallbacks from 'src/use/cbcks/activityCallbacks'
import profileCallbacks from 'src/use/cbcks/profileCallbacks'

export default defineComponent({
  name: 'App',
  setup () {
    const { loginCallback, logoutCallback } = authCallbacks()
    const { updateFeatureCallback, addFeatureCallback } = featureCallbacks()
    const { addActivityCallback, updateActivityCallback, deleteActivityCallback } = activityCallbacks()
    const { updateSkillCallback, addSkillCallback } = profileCallbacks()

    onMounted(() => {
      ApiClient.authService.authListenerOn(loginCallback, logoutCallback)
      ApiClient.featureService.featureListenerOn(addFeatureCallback, updateFeatureCallback)
      ApiClient.activityService.activityListenerOn(addActivityCallback, updateActivityCallback, deleteActivityCallback)
      ApiClient.profileService.skillListenerOn(addSkillCallback, updateSkillCallback)
    })

    return {

    }
  }
})
</script>
