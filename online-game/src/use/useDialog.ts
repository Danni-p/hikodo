import { useQuasar } from 'quasar'
import FeatureDialog from 'src/components/dialogs/FeatureDialog.vue'
import { FeatureType } from 'src/models/types/feature'

export default function useDialog () {
  const $q = useQuasar()

  function showFeatureDialog (type: FeatureType) {
    $q.dialog({
      component: FeatureDialog,
      componentProps: {
        featureType: type
      }
    }).onOk(() => {
      // console.log('OK')
    }).onCancel(() => {
      // console.log('Cancel')
    }).onDismiss(() => {
      // console.log('Called on OK or Cancel')
    })
  }

  function showConfirmDialog (title: string, message: string, callback: () => Promise<void>) {
    $q.dialog({
      title: title,
      message: message,
      cancel: true,
      persistent: true,
      html: true
    }).onOk(async () => {
      await callback()
      // console.log('>>>> OK')
    }).onCancel(() => {
      // console.log('>>>> Cancel')
    }).onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    })
  }

  return {
    showFeatureDialog,
    showConfirmDialog
  }
}
