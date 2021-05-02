<template>
  <q-page class=" q-pa-md items-center justify-evenly">
    <div class="q-pa-md row items-start q-gutter-md">
      <div v-for="(feature, id) in getFeatures" :key="feature.name">
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
import { defineComponent, reactive } from 'vue'
import FeatureCard from 'src/components/FeatureCard.vue'
import useFeature from 'src/use/useFeature'
import useDialog from 'src/use/useDialog'
import { FeatureType } from 'src/models/types/feature'

export default defineComponent({
  name: 'HomePage',
  components: {
    FeatureCard
  },
  setup () {
    const { getFeatures } = useFeature()
    const { showFeatureDialog } = useDialog()

    const icons = reactive({
      attack: 'eva-flash',
      defense: 'eva-shield',
      health: 'eva-heart',
      healing: 'eva-activity'
    })
    const getIcon = (type: FeatureType) => {
      if (!Object.keys(icons).includes(type)) {
        return 'unknown'
      }
      return icons[type]
    }

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
