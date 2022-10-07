import { readFileSync, readdirSync, writeFileSync } from 'fs'

import { translationKeys } from '@/i18n/translation-keys'

import { getShortKey } from './get-short-key'

const jsFiles = readdirSync('dist').filter(name => name.endsWith('.js'))

const replaceKeysInFile = (fileName: string) => {
  let fileContent = readFileSync(`dist/${fileName}`).toString()

  translationKeys.forEach((key, index) => {
    const shortKey = getShortKey(index)

    fileContent = fileContent
      .replaceAll(`"${key}"`, `"${shortKey}"`)
      .replaceAll(`.${key}`, `.${shortKey}`)
  })

  writeFileSync(`dist/${fileName}`, fileContent)
}

jsFiles.forEach(replaceKeysInFile)
