const SPLITTER = ', '
const SECONDS_IN_MINUTE = 60
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60
const MILLISECONDS_IN_DAY = 1000 * SECONDS_IN_HOUR * 24

export const formDate = (dateString: string) => {
  const date = new Date(dateString)

  const preFormatted = date.toLocaleString('ru', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

  return preFormatted.slice(0, -1).split(SPLITTER).reverse().join(SPLITTER)
}

export const pickTime = (dateString: string) => dateString.split(' ')[1]

export const stringifySeconds = (seconds: number) => {
  const hours = Math.floor(seconds / SECONDS_IN_HOUR)
  const minutes = Math.floor((seconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE)

  return `${hours} ч ${minutes} м`
}

export const getDateDiffLabel = (
  depTimeString: string,
  arrTimeString: string
): string => {
  const [depDayNumber, arrDayNumber] = [depTimeString, arrTimeString].map(
    str => new Date(`${str.split(' ')[0]} GMT`).getTime() / MILLISECONDS_IN_DAY
  )

  const diff = arrDayNumber - depDayNumber

  return diff ? `+${diff}` : ''
}
