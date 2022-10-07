import { ref, watch } from 'vue'

import { getRawJson } from '@/net'

import { mainLanguageName } from '../languages'
import { setHtmlLanguage } from '../helpers/html-operations'
import {
  getInitialLanguage,
  setInitialLanguage,
} from '../helpers/initial-language'
import {
  addDictionary,
  setCurrentDictionaryName,
  checkDictionaryExistence,
} from './dictionaries.hook'

export const currentLanguage = ref(getInitialLanguage())

export const isLanguageLoading = ref(false)

export const loadCurrentLanguage = async (prevName = mainLanguageName) => {
  const name = currentLanguage.value

  if (!checkDictionaryExistence(name)) {
    const path = `/dictionaries/${dictionaryFiles[name]}`

    const dictionary = await getRawJson(path)

    if (dictionary) {
      addDictionary(name, dictionary)
    } else {
      currentLanguage.value = prevName

      return
    }
  }

  setCurrentDictionaryName(name)
  setHtmlLanguage(name)
}

watch(currentLanguage, async (name, prev) => {
  setInitialLanguage(name)

  isLanguageLoading.value = true

  await loadCurrentLanguage(prev)

  isLanguageLoading.value = false
})
