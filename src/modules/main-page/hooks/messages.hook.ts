import { t } from '@/i18n'
import { showMessagePopup } from '@/common'

export const showLuggageMessage = () => {
  showMessagePopup(t.value.LUGGAGE_HEADER, t.value.LUGGAGE_TEXT)
}

export const showSelectionMessage = () => {
  showMessagePopup(t.value.SELECTION_HEADER, t.value.SELECTION_TEXT)
}

export const showDetailsMessage = () => {
  showMessagePopup(t.value.FLIGHT_DETAILS, t.value.CALL_US)
}

export const showTermsMessage = () => {
  showMessagePopup(t.value.TARIFF_TERMS, t.value.CALL_US)
}
