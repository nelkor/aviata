import { openPopup } from '@/pop-up'

import MessagePopup from '../components/MessagePopup.vue'

export const showMessagePopup = (header: string, text: string) => {
  openPopup(MessagePopup, { header, text })
}
