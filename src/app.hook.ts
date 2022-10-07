import { ref } from 'vue'

import { loadCurrentLanguage } from '@/i18n'
import { loadData } from '@/main-page'

export const useApp = () => {
  const isAppReady = ref(false)

  Promise.all([loadCurrentLanguage(), loadData()]).then(() => {
    isAppReady.value = true
  })

  return { isAppReady }
}
