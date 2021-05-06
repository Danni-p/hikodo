import { FeatureType } from 'src/models/types/feature'

export function calculateBoost (id: FeatureType, lvl: number) {
  if (id === 'attack') {
    return lvl * 0.1
  } else if (id === 'defense') {
    return lvl * 0.1
  } else if (id === 'healing') {
    return lvl * 0.1
  } else {
    throw Error('no boost for Health points available')
  }
}

export function calculateMaxBoost (id: FeatureType) {
  return calculateBoost(id, 3)
}
