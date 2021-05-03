import { FeatureType } from '../feature'

export interface Skill {
  name: string;
  level: number;
  boost: number;
}

export interface SkillWithId {
  name: string;
  level: number;
  boost: number;
  id: FeatureType;
}
