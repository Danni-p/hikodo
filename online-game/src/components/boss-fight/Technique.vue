<template>
<q-card class="my-card q-pa-md bg-teal-2" flat bordered>
    <q-card-actions align="center">
      <!-- <q-icon class="circle-icon" size="64px" :name="$props.icon" /> -->
      <q-avatar class="col" size="100px">
        <img class="circle-icon" :src="$props.srcPath">
      </q-avatar>
    </q-card-actions>
    <q-card-section class="q-pt-xs text-center">
      <div class="text-h6 head-line">{{$props.technique.name}}
      </div>
    </q-card-section>
    <q-separator/>
    <q-card-section class="q-pt-sm">
      <div class="text-subtitle1 text-center text-grey">Übung</div>
      <div class="text-h6 text-center prop-title q-pb-md">{{$props.technique.exercise}}</div>
      <div class="text-subtitle1 text-center text-grey">Schadenwirkung</div>
      <div class="text-h6 text-center prop-title">{{$props.technique.damageClass}}</div>
    </q-card-section>
    <q-card-section>
      <q-btn
        flat
        class="full-width"
        color="primary"
        label="Auswählen"
        @click="handleSelectTechnique()"
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { AttackState, Technique } from '../../models/types/bossfight'
import useBossfight from '../../use/useBossfight'

export default defineComponent({
  props: {
    technique: {
      type: Object as PropType<Technique>,
      required: true
    },
    srcPath: {
      type: String,
      required: true
    }
  },
  setup () {
    const { setAttackState } = useBossfight()
    function handleSelectTechnique () {
      console.log('1234')
      setAttackState(AttackState.CHOOSE_HEALING)
    }
    return {
      handleSelectTechnique
    }
  }
})
</script>

<style lang="scss" scoped>
.prop-title {
  font-size: 14pt;
}
</style>
