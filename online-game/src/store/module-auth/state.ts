export interface AuthStateInterface {
  authenticated: boolean;
}

function state (): AuthStateInterface {
  return {
    authenticated: false
  }
}

export default state
