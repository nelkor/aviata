import { rmSync, mkdirSync, writeFileSync, existsSync } from 'fs'
import { createHash } from 'crypto'

import { compareTranslationKeys } from './sorter'
import { ru } from './set/ru'
import { kk } from './set/kk'

export const dictionariesDist = 'dictionaries/dist'

if (existsSync(dictionariesDist)) {
  rmSync(dictionariesDist, { recursive: true })
}

mkdirSync(dictionariesDist)

Object.entries({ ru, kk }).forEach(([langName, dictionary]) => {
  const translationsJson = JSON.stringify(
    Object.entries(dictionary)
      .sort(compareTranslationKeys)
      .map(([, value]) => value)
  )

  const hex = createHash('md5').update(translationsJson).digest('hex')
  const hash = parseInt(hex.slice(0, 8), 16).toString(32)
  const fileName = `${dictionariesDist}/${langName}-${hash}.json`

  writeFileSync(fileName, translationsJson)
})
