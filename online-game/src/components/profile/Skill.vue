<template>
  <div style="display:inline;">
    <q-icon size="32px" :name="handleIcon()" />
    <span v-if="$props.featureType === 'attack'">
      {{getTotalAttackBoostInPercent}}%
    </span>
    <span v-else-if="$props.featureType === 'defense'">
      {{getTotalDefenseBoostInPercent}}%
    </span>
    <span v-else-if="$props.featureType === 'healing'">
      {{getTotalHealingBoostInPercent}}%
    </span>
    <span v-else-if="$props.featureType === 'health'">
      {{getTotalHealthBoostInPercent}}%
    </span>
  </div>
</template>

<script lang="ts">
import { FeatureType } from 'src/models/types/feature'
import { defineComponent/* , PropType */ } from 'vue'
import useFeature from 'src/use/useFeature'
import useProfile from '../../use/useProfile'

export default defineComponent({
  props: {
    featureType: {
      type: String, // Object as PropType<FeatureType>,
      required: true
    }
  },
  setup (props) {
    const { getIcon } = useFeature()
    const {
      getTotalAttackBoostInPercent,
      getTotalHealingBoostInPercent,
      getTotalDefenseBoostInPercent,
      getTotalHealthBoostInPercent
    } = useProfile()
    function handleIcon () {
      return getIcon(<FeatureType>props.featureType)
    }

    return {
      handleIcon,
      getTotalAttackBoostInPercent,
      getTotalHealingBoostInPercent,
      getTotalDefenseBoostInPercent,
      getTotalHealthBoostInPercent
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
