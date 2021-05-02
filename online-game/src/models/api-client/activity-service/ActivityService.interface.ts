import { Activity } from 'src/models/types/activity'
import { ActivityCallback } from './ActivityService.model'

/**
* @Name ItemsApiClientInterface
* @description
* Interface for the Items api client module
*/
export interface ActivityServiceInterface {
  addActivity: (activity: Activity) => Promise<void>
  updateOldestActivity: (activity: Activity) => Promise<void>
  activityListenerOn: (addActivityCallback: ActivityCallback, updateActivityCallback: ActivityCallback, deleteActivityCallback: ActivityCallback) => void
  activityListenerOff: () => void
  deleteAllActivities: () => Promise<void>
}
