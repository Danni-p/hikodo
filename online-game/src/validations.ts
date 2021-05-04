const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/

const integerPattern = /^[0-9]*$/

const integerGreaterZeroPattern = /^[1-9][0-9]*$/

export const emailRule = (val: string) => emailPattern.test(val) || 'Please enter a valid email address'

export const requiredRule = (val: string) => !!val || 'Field is required'

export const integerRule = (val: string) => !!integerPattern.test(val) || 'Bitte gebe eine Zahl >= 0 ein!'

export const integerGreaterZeroRule = (val: string) => !!integerGreaterZeroPattern.test(val) || 'Bitte gebe eine Zahl > 0 ein!'

export const passwordRule = (val: string) => val.length >= 6 || 'Password is too short!'

export const isValidRule = (rule: ((val: string) => boolean | string), val: string) => {
  return typeof rule(val) !== 'string'
}
