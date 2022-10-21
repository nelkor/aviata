import { ref } from 'vue'

import { loadCurrentLanguage } from '@/i18n'
import { loadData } from '@/main-page'

const loader = document.querySelector('.app-loader') as HTMLDivElement

export const useApp = () => {
  const isAppReady = ref(false)

  Promise.all([loadCurrentLanguage(), loadData()]).then(() => {
    isAppReady.value = true

    loader.classList.add('disappeared')

    setTimeout(() => {
      loader.parentNode?.removeChild(loader)
    }, 1000)
  })

  return { isAppReady }
}
