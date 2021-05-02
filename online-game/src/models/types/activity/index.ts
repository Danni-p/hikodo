import firebase from 'firebase'
import { FeatureType } from '../feature'

export interface Activity {
  type: FeatureType;
  count: number;
  time: firebase.firestore.Timestamp
}

export interface ActivityWithId {
  type: FeatureType;
  count: number;
  time: firebase.firestore.Timestamp;
  id: string;
}
