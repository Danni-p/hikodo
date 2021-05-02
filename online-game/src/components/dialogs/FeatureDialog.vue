<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="text-h6">{{getFeatureByType($props.featureType).name}}</div>
        <div class="text-subtitle1">{{getDetailsText($props.featureType)}}</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script lang="ts">
import { useDialogPluginComponent } from 'quasar'
import { PropType } from 'vue'
import useFeature from 'src/use/useFeature'
import { FeatureType } from 'src/models/types/feature'

export default {
  props: {
    featureType: {
      type: Object as PropType<FeatureType>,
      required: true
    }
    // ...your custom props
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
  ],

  setup () {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogCancel } = useDialogPluginComponent()
    const { getDetailsText, getFeatureByType } = useFeature()
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,

      getDetailsText,
      getFeatureByType
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
