
export function calculateNextStep (min: number, sec: number) {
  if ((sec === 0) && (min === 0)) {
    return {
      min: 0,
      sec: 0
    }
  }

  if (sec === 0) {
    return {
      min: min - 1,
      sec: 59
    }
  }

  return {
    min: min,
    sec: sec - 1
  }
}

export function formatSeconds (sec: number) {
  if (sec < 10) {
    return '0' + sec.toString()
  }
  return sec
}
