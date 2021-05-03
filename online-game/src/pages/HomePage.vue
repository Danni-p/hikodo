<template>
  <q-page class=" q-pa-md items-center justify-evenly">
    <div class="q-pb-xl">
      <profile />
    </div>
    <q-separator inset />
    <div class="q-pa-md row items-start">
      <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3 q-px-sm" v-for="(feature, id) in getFeatures" :key="feature.name">
        <feature-card
          :feature="feature"
          :featureId="id"
          v-on:click-details="showDetailsDialog(feature.type)"
          :icon="getIcon(feature.type)" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeatureCard from 'src/components/FeatureCard.vue'
import Profile from 'src/components/Profile.vue'
import useFeature from 'src/use/useFeature'
import useDialog from 'src/use/useDialog'
import { FeatureType } from 'src/models/types/feature'

export default defineComponent({
  name: 'HomePage',
  components: {
    FeatureCard,
    Profile
  },
  setup () {
    const { getFeatures, getIcon } = useFeature()
    const { showFeatureDialog } = useDialog()

    function showDetailsDialog (type: FeatureType) {
      showFeatureDialog(type)
    }

    return {
      getFeatures,
      getIcon,
      showDetailsDialog
    }
  }
})
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
</style>
