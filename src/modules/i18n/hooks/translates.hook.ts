import { computed } from 'vue'

import { translationKeys, TranslationKey } from '../translation-keys'
import { getCurrentDictionary } from './dictionaries.hook'

export const t = computed(() => {
  const dictionary = getCurrentDictionary()

  if (!dictionary || dictionary.length != translationKeys.length) {
    throw new Error('invalid dictionary')
  }

  return translationKeys.reduce((acc, cur, index) => {
    acc[cur] = dictionary[index]

    return acc
  }, {} as unknown as Record<TranslationKey, string>)
})
