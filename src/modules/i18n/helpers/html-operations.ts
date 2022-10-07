import { languages } from '../languages'

const html = document.querySelector('html') as HTMLHtmlElement

export const setHtmlLanguage = (name: string) => {
  html.setAttribute('lang', name)
  html.setAttribute('dir', languages[name].rtl ? 'rtl' : 'ltr')
}
