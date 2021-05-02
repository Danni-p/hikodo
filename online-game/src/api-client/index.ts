import { ApiClientInterface } from 'src/models/api-client/ApiClient.interface'
/* import apiMockClient from './mock' */
import apiLiveClient from './live'
import { config } from 'src/config'

// return either the live or the mock client
let apiClient: ApiClientInterface
console.log('asdfghjkl')
if (config.apiClient.type === 'live') {
  apiClient = apiLiveClient
} else if (config.apiClient.type === 'mock') {
  throw Error('Not implemented yet!')
} else {
  throw Error('Invalid or undefined config.apiClient.type')
}

export default apiClient
