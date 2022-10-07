import { translationKeys, TranslationKey } from '@/i18n/translation-keys'

export const compareTranslationKeys = ([a]: string[], [b]: string[]) => {
  const indexOfA = translationKeys.indexOf(a as TranslationKey)
  const indexOfB = translationKeys.indexOf(b as TranslationKey)

  return indexOfA - indexOfB
}
