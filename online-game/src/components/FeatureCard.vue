<template>
  <q-card class="my-card q-pa-md" flat bordered>
    <q-card-actions align="center">
      <q-icon class="circle-icon" size="64px" :name="$props.icon" />
    </q-card-actions>
    <q-card-section class="q-pt-xs text-center">
      <div class="text-h6 head-line">{{$props.feature.name}}
        <q-popup-edit
          v-if="isAuthenticated"
          v-model="featureNameWritable"
          auto-save
          @update:model-value="handleRenameFeature()"
          v-slot="scope">
          <q-input v-model="scope.value" :rules="[ requiredRule ]" dense autofocus counter @keyup.enter="scope.set" />
        </q-popup-edit>
      </div>
      <div class="text-caption text-grey">
        Übung: {{$props.feature.exercise}}
        <q-popup-edit
          v-if="isAuthenticated"
          v-model="featureExerciseWritable"
          auto-save
          @update:model-value="handleChangeExerciseFeature()"
          v-slot="scope">
          <q-input v-model="scope.value" :rules="[ requiredRule ]" dense autofocus counter @keyup.enter="scope.set" />
        </q-popup-edit>
      </div>
      <q-card-actions class="text-center">
      <q-btn
        flat
        @click="$emit('click-details')"
        class="text-primary full-width">Details</q-btn>
    </q-card-actions>
    </q-card-section>
    <q-card-section class="q-pt-xs text-center">
      <div class="text-h6 head-line">
        <span>{{$props.feature.reps}}
          <q-popup-edit
            v-if="isAuthenticated"
            v-model="repsWritable"
            @update:model-value="handleSetReps()"
            v-slot="scope">
            <q-input
              type="number"
              v-model="scope.value"
              dense
              :rules="[ requiredRule, integerRule ]"
              autofocus
              counter
              @keyup.enter="scope.set" />
          </q-popup-edit>
        </span> /
        <span>
        {{$props.feature.maxReps}}
        <q-popup-edit
            v-if="isAuthenticated"
            v-model="maxRepsWritable"
            @update:model-value="handleSetMaxReps()"
            v-slot="scope">
            <q-input
              type="number"
              v-model="scope.value"
              dense
              :rules="[ requiredRule, integerRule ]"
              autofocus
              counter
              @keyup.enter="scope.set" />
          </q-popup-edit>
        </span>
      </div>
    </q-card-section>
    <q-card-section>
      <q-form @submit="(evt) => handleAddReps()">
        <q-input
          ref="addRepsInputRef"
          dense
          type="number"
          :rules="[ integerRule ]"
          outlined
          v-model="addReps" />
        <q-btn
          flat
          class="full-width"
          color="primary"
          label="Hinzufügen"
          type="submit"
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Feature, FeatureUpdate } from 'src/models/types/feature'
import { Activity } from 'src/models/types/activity'
import { defineComponent, PropType, ref } from 'vue'
import { Notify } from 'quasar'
import firebase from 'firebase'
import useFeature from 'src/use/useFeature'
import useAuth from 'src/use/useAuth'
import useDialog from 'src/use/useDialog'
import { requiredRule, integerRule, isValidRule } from 'src/validations'

export default defineComponent({
  props: {
    feature: {
      type: Object as PropType<Feature>,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    featureId: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const { updateFeature, updateFeatureWithTracking } = useFeature()
    const { isAuthenticated } = useAuth()
    const featureNameWritable = ref(props.feature.name)
    const featureExerciseWritable = ref(props.feature.exercise)
    const repsWritable = ref(props.feature.reps)
    const maxRepsWritable = ref(props.feature.maxReps)
    const addReps = ref(0)
    const addRepsInputRef = ref()
    const { showConfirmDialog } = useDialog()

    const handleAddReps = () => {
      console.log('add Reps')
      if (+addReps.value + +repsWritable.value > +props.feature.maxReps) {
        return
      }
      console.log(addReps.value, +addReps.value === 0)
      if (+addReps.value === 0) {
        return
      }

      const callback = async () => {
        const upd: FeatureUpdate = {
          id: props.featureId,
          reps: +addReps.value + +repsWritable.value
        }
        const activity: Activity = {
          type: props.feature.type,
          count: +addReps.value,
          time: firebase.firestore.Timestamp.now()
        }
        await updateFeatureWithTracking(upd, activity).then(() => {
          repsWritable.value = +repsWritable.value + +addReps.value
          addReps.value = 0
          Notify.create({
            message: 'Deine Wiederholungen wurden hinzugefügt',
            color: 'positive'
          })
        })
      }
      let einheit = 'Einheit'
      if (+addReps.value > 1) einheit = 'Einheiten'
      const message = `Bist du dir sicher, dass du von der Übung <strong>${props.feature.exercise} <span class="text-red">${addReps.value} ${einheit} </span></strong> gemacht hast? Dann klicke auf OK.`
      showConfirmDialog('Warte kurz!', message, callback)
    }

    const handleRenameFeature = async () => {
      if (!isValidRule(requiredRule, featureNameWritable.value.toString())) {
        featureNameWritable.value = props.feature.name
        return
      }

      const upd: FeatureUpdate = {
        id: props.featureId,
        name: featureNameWritable.value
      }
      await updateFeature(upd)
    }

    const handleChangeExerciseFeature = async () => {
      if (!isValidRule(requiredRule, featureExerciseWritable.value.toString())) {
        featureExerciseWritable.value = props.feature.exercise
        return
      }

      const upd: FeatureUpdate = {
        id: props.featureId,
        exercise: featureExerciseWritable.value
      }
      await updateFeature(upd)
    }

    const handleSetReps = async () => {
      if (!isValidRule(requiredRule, repsWritable.value.toString())) {
        repsWritable.value = props.feature.reps
        return
      }

      if (!isValidRule(integerRule, repsWritable.value.toString())) {
        repsWritable.value = props.feature.reps
        return
      }

      if (+repsWritable.value > +props.feature.maxReps) {
        repsWritable.value = props.feature.reps
        return
      }

      const upd: FeatureUpdate = {
        id: props.featureId,
        reps: repsWritable.value
      }
      await updateFeature(upd)
    }

    const handleSetMaxReps = async () => {
      if (!isValidRule(requiredRule, maxRepsWritable.value.toString())) {
        maxRepsWritable.value = props.feature.maxReps
        return
      }

      if (!isValidRule(integerRule, maxRepsWritable.value.toString())) {
        maxRepsWritable.value = props.feature.maxReps
        return
      }

      if (+maxRepsWritable.value < +props.feature.reps) {
        maxRepsWritable.value = props.feature.maxReps
        return
      }

      const upd: FeatureUpdate = {
        id: props.featureId,
        maxReps: maxRepsWritable.value
      }
      await updateFeature(upd)
    }

    return {
      featureNameWritable,
      featureExerciseWritable,
      repsWritable,
      maxRepsWritable,
      handleRenameFeature,
      handleChangeExerciseFeature,
      handleSetReps,
      handleSetMaxReps,
      requiredRule,
      integerRule,
      isAuthenticated,
      addReps,
      handleAddReps,
      addRepsInputRef
    }
  }
})
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
}

.head-line {
  font-size: 12pt;
  text-align: center;
}

.circle-icon {
    background: $secondary;
    padding:30px;
    border-radius: 50%;
}

</style>
