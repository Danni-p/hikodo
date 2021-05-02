import { firebaseDB } from 'src/boot/firebase'
import { ActivityServiceInterface } from './ActivityService.interface'
import { ActivityWithId, Activity } from 'src/models/types/activity'

export type ActivityCallback = (activityWithId: ActivityWithId) => void

export class ActivityServiceModel implements ActivityServiceInterface {
  private activityListener: (() => void) | null = null

  async updateOldestActivity (activity: Activity) {
    const oldestDocArr = await firebaseDB.collection('activities').orderBy('time').limit(1).get()
    if (oldestDocArr.empty) {
      return Promise.reject(new Error('No Activity Doc to update!'))
    }
    const oldestDoc = oldestDocArr.docs[0]
    await firebaseDB.collection('activities').doc(oldestDoc.id).update(activity)
  }

  addActivity (activity: Activity) {
    return firebaseDB.collection('activities').doc().set(activity)
  }

  activityListenerOn (addActivityCallback: ActivityCallback, updateActivityCallback: ActivityCallback, deleteActivityCallback: ActivityCallback) {
    this.activityListener = firebaseDB.collection('activities').orderBy('time', 'asc').onSnapshot((snapshot) => {
      console.log('nr of Docs', snapshot.docs.length)
      snapshot.docChanges().forEach((change) => {
        const activityId = change.doc.id
        const activity = <Activity>change.doc.data()
        const activityWithId: ActivityWithId = { id: activityId, ...activity }
        if (change.type === 'added') {
          addActivityCallback(activityWithId)
        }
        if (change.type === 'modified') {
          updateActivityCallback(activityWithId)
        }
        if (change.type === 'removed') {
          deleteActivityCallback(activityWithId)
        }
      })
    })
  }

  activityListenerOff () {
    if (this.activityListener) {
      this.activityListener()
    }
  }

  async deleteAllActivities () {
    await firebaseDB.collection('activities').get().then(async (snap) => {
      for (const doc of snap.docs) {
        await doc.ref.delete()
      }
    })
  }
}
