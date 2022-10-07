import { ref, watch, computed } from 'vue'

import { AirlinesFilter } from '../types'

export const airlines = ref<AirlinesFilter[]>([])

export const allAirlinesChecked = ref(true)

export const onlyDirectFlights = ref(false)

export const onlyWithLuggage = ref(false)

export const onlyRefundable = ref(false)

export const setAirlines = (rawAirlines: Record<string, string>) => {
  airlines.value = Object.entries(rawAirlines).map(([code, name]) => ({
    code,
    name,
    checked: false,
  }))
}

export const resetTariffOptions = () => {
  onlyDirectFlights.value = false
  onlyWithLuggage.value = false
  onlyRefundable.value = false
}

export const resetFilterAirlines = () => {
  allAirlinesChecked.value = true
}

export const resetAllFilters = () => {
  resetTariffOptions()
  resetFilterAirlines()
}

export const airlinesInFilter = computed(() =>
  airlines.value.filter(({ checked }) => checked).map(({ code }) => code)
)

watch(allAirlinesChecked, value => {
  if (value && airlinesInFilter.value.length) {
    airlines.value = airlines.value.map(company => ({
      ...company,
      checked: false,
    }))
  }

  if (!value && !airlinesInFilter.value.length) {
    Promise.resolve().then(() => {
      allAirlinesChecked.value = true
    })
  }
})

watch(airlinesInFilter, value => {
  if (value.length && allAirlinesChecked.value) {
    allAirlinesChecked.value = false
  }

  if (!value.length && !allAirlinesChecked.value) {
    allAirlinesChecked.value = true
  }
})
