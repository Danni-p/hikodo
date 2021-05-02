import { Activity } from 'src/models/types/activity'

export interface ActivityStateInterface {
  activities: {
    [key: string]: Activity
  },
  maxNrOfActivities: number
}

function state (): ActivityStateInterface {
  return {
    activities: {},
    maxNrOfActivities: 20
  }
}

export default state
