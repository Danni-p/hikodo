import actions from './useActions'
import getters from './useGetters'
import attackGetters from './useAttackGetters'
import defenseGetters from './useDefenseGetters'
import healthGetters from './useHealthGetters'
import healingGetters from './useHealingGetters'
import { computed } from 'vue'

const use = () => {
  const attack = attackGetters()
  const defense = defenseGetters()
  const healing = healingGetters()
  const health = healthGetters()

  function _totalPowerInPercent () {
    return (
      attack._totalAttackBoostInPercent() +
      defense._totalDefenseBoostInPercent() +
      healing._totalHealingBoostInPercent() +
      health._totalHealthBoostInPercent()
    ) / 4
  }

  return {
    ...actions(),
    ...getters(),
    ...attack,
    ...defense,
    ...healing,
    ...health,
    getTotalPowerInPercent: computed(() => Math.ceil(_totalPowerInPercent()))
  }
}

export default use
