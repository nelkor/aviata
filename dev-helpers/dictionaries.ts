import { readdirSync } from 'fs'

import { dictionariesDist } from '../dictionaries'

export const getDictionaryFiles = () =>
  readdirSync(dictionariesDist).reduce<Record<string, string>>((acc, cur) => {
    const [key] = cur.split('-')

    acc[key] = cur

    return acc
  }, {})
