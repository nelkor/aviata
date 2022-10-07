const ALPHABET_SIZE = 26

const azLetters = Array.from({ length: ALPHABET_SIZE }, (_, i) =>
  String.fromCharCode('a'.charCodeAt(0) + i)
)

const azCapitals = Array.from({ length: ALPHABET_SIZE }, (_, i) =>
  String.fromCharCode('A'.charCodeAt(0) + i)
)

const digits = Array.from({ length: 10 }, (_, i) => i.toString())
const firstLetters = [...azLetters, ...azCapitals]
const letters = [...firstLetters, ...digits]

const getOffsetOfRank = (rank: number): number => {
  if (rank == 1) {
    return 0
  }

  const offsetOfCurrentRank =
    rank == 2
      ? firstLetters.length
      : firstLetters.length * letters.length ** (rank - 2)

  return getOffsetOfRank(rank - 1) + offsetOfCurrentRank
}

const createKey = (rank: number, indexInRank: number): string => {
  if (rank == 1) {
    return firstLetters[indexInRank]
  }

  const nextIndex = Math.floor(indexInRank / letters.length)

  return createKey(rank - 1, nextIndex) + letters[indexInRank % letters.length]
}

export const getShortKey = (index: number) => {
  let rank = 1

  while ((index + 1) / getOffsetOfRank(rank + 1) > 1) {
    rank++
  }

  const indexInRank = index - getOffsetOfRank(rank)

  return createKey(rank, indexInRank)
}
