import { firebaseDB } from 'src/boot/firebase'
import { FeatureServiceInterface } from './FeatureService.interface'
import { FeatureWithId, Feature, FeatureUpdate } from 'src/models/types/feature'

export type FeatureCallback = (featureWithId: FeatureWithId) => void

export class FeatureServiceModel implements FeatureServiceInterface {
  private featureListener: (() => void) | null = null

  updateFeature (updateFeature: FeatureUpdate) {
    const { id, ...feat } = updateFeature
    return firebaseDB.collection('features').doc(id).update(feat)
  }

  featureListenerOn (addFeatureCallback: FeatureCallback, updateFeatureCallback: FeatureCallback) {
    this.featureListener = firebaseDB.collection('features').orderBy('order', 'asc').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const featureId = change.doc.id
        const feature = <Feature>change.doc.data()
        const featureWithId: FeatureWithId = { id: featureId, ...feature }
        if (change.type === 'added') {
          addFeatureCallback(featureWithId)
        }
        if (change.type === 'modified') {
          updateFeatureCallback(featureWithId)
        }
        if (change.type === 'removed') {
          throw Error('delete Feature not yet implemented!')
        }
      })
    })
  }

  featureListenerOff () {
    if (this.featureListener) {
      this.featureListener()
    }
  }
}
