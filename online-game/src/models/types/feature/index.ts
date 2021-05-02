export type FeatureType = 'attack' | 'defense' | 'healing' | 'health'

export interface Feature {
  name: string;
  exercise: string;
  maxReps: number;
  reps: number;
  bonusMin: number;
  bonusMax: number;
  type: FeatureType;
}

interface Id {
  id: string;
}

export type FeatureUpdate = Partial<Feature> & Required<Id>

export type FeatureWithId = Feature & Required<Id>
