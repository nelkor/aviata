import { languages, mainLanguageName } from '../languages'

const LS_LANG_KEY = 'lang'
const cutLang = (name: string) => name.split('-')[0].toLowerCase()
const isValidLanguage = (name: string) => Boolean(languages[name])

export const getInitialLanguage = (): string => {
  const fromLs = localStorage.getItem(LS_LANG_KEY)

  if (fromLs && isValidLanguage(fromLs)) {
    return fromLs
  }

  const fromNavigator = cutLang(navigator.language)

  return isValidLanguage(fromNavigator) ? fromNavigator : mainLanguageName
}

export const setInitialLanguage = (name: string) => {
  localStorage.setItem(LS_LANG_KEY, name)
}
