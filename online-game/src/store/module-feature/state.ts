import { Feature } from 'src/models/types/feature'

export interface FeatureStateInterface {
  features: {
    [key: string]: Feature
  },
  detailsText: {
    [type: string]: string
  },
}

function state (): FeatureStateInterface {
  return {
    features: {},
    detailsText: {
      attack: 'lorem ipsum...',
      defense: 'blablalba',
      health: 'heartyheratheart',
      healing: 'heeeeeeeeaaaaaal'
    }
  }
}

export default state
