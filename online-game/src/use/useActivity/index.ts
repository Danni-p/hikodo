import actions from './useActions'
import getters from './useGetters'

const use = () => {
  return {
    ...actions(),
    ...getters()
  }
}

export default use
