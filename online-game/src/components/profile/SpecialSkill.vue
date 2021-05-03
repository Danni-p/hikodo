<template>
<div class="row ">
  <div class=" q-py-sm col">
    <q-icon size="25px" :name="getIcon($props.featureType)" />
    {{$props.name}}:
      <span v-if="!isAuthenticated">
       {{model}}
      </span>
  </div>
  <div class="col" v-if="isAuthenticated">
    <q-select
    filled
    dense
    v-model="model"
    @update:model-value="handleSelectSkillLevel()"
    :options="options"
    label="Level" />
  </div>
</div>
</template>

<script lang="ts">
import { FeatureType } from 'src/models/types/feature'
import { defineComponent, ref, watch } from 'vue'
import useFeature from 'src/use/useFeature'
import useAuth from 'src/use/useAuth'
import useProfile from 'src/use/useProfile'

export default defineComponent({
  props: {
    featureType: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const { getIcon } = useFeature()
    const { setSkillLevel, getAttackSkillLevel, getDefenseSkillLevel, getHealingSkillLevel } = useProfile()
    const { isAuthenticated } = useAuth()
    /*  const skillLevel = getSkillLevel(props.featureType).toString()
    console.log('skillLevel', skillLevel) */
    const model = ref(props.level)
    const options = [
      0, 1, 2, 3
    ]

    async function handleSelectSkillLevel () {
      await setSkillLevel(<FeatureType>props.featureType, model.value)
    }

    if (props.featureType === 'attack') {
      watch(getAttackSkillLevel, (newLvl) => {
        console.log('watch atack skill', newLvl)
        model.value = newLvl
      })
    } else if (props.featureType === 'defense') {
      watch(getDefenseSkillLevel, (newLvl) => {
        console.log('watch atack skill', newLvl)
        model.value = newLvl
      })
    } else if (props.featureType === 'healing') {
      watch(getHealingSkillLevel, (newLvl) => {
        console.log('watch atack skill', newLvl)
        model.value = newLvl
      })
    }

    return {
      getIcon,
      model,
      options,
      isAuthenticated,
      handleSelectSkillLevel
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
