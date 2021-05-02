/**
  * @Name ConfigInterface
  * @description
  *
  */
export interface ConfigInterface {
  global: {
  // ... things that are not specific to a single app domain
  }

  apiClient: {
    type: string
  }
}
