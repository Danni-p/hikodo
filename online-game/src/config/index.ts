import { ConfigInterface } from './Config.interface'
// individual environments configs:
import configLive from './config-files/live.json'

// return appropriate config based on env VUE_APP_CONFIG
let env = 'mock' /* by default we return the mock configuration */
// if our env VUE_APP_CONFIG variable is set, get its value

if (process.env.VUE_APP_CONFIG) {
  console.log('hello')
  env = process.env.VUE_APP_CONFIG.trim().toLowerCase()
}

// you can use a strategy pattern, or a javascript Map()
export const configsMap: Map<string, ConfigInterface> = new Map<string, ConfigInterface>([
  ['live', configLive]
  /* ['mock', configMock], */
])

if (!configsMap.has(env)) {
  throw Error(`Could not find config for VUE_APP_CONFIG key "${env}"`)
}

export const config: ConfigInterface = configsMap.get(env) as ConfigInterface
