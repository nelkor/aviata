import { DeepReadonly } from 'vue'

import { Language } from './types'

export const languages: DeepReadonly<Record<string, Language>> = {
  ru: {
    name: 'Русский',
    rtl: false,
  },
  kk: {
    name: 'қазақ',
    rtl: false,
  },
}

export const mainLanguageName = Object.keys(languages)[0]
