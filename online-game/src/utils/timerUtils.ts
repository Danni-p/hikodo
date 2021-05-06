
export function calculateNextStep (min: number, sec: number, timeCompressFaktor = 1, intervallInSec = 1) {
  if ((sec === 0) && (min === 0)) {
    return {
      min: 0,
      sec: 0
    }
  }

  const totalSeconds = min * 60 + sec
  const nextTotalSeconds = totalSeconds - timeCompressFaktor * intervallInSec
  if (nextTotalSeconds < 0) {
    return {
      min: 0,
      sec: 0
    }
  }
  const nextMin = (nextTotalSeconds / 60 >> 0)
  const nextSec = nextTotalSeconds % 60
  return {
    min: nextMin,
    sec: nextSec
  }
/*   if (sec === 0) {
    return {
      min: min - 1,
      sec: 59
    }
  } */
}

export function seconds2Minutes (secs: number) {
  return (secs / 60 >> 0)
}

export function seconds2RestSeconds (secs: number) {
  return secs % 60
}

export function formatSeconds (sec: number) {
  let secs = (Math.round(sec * 100) / 100).toString()
  if (!secs.includes('.')) {
    secs = secs + '.0'
  }
  if (sec < 10) {
    return '0' + secs
  }
  return secs.toString()
}
