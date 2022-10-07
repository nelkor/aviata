import { ref, computed } from 'vue'

import { parseFlight } from '../converters/parse-flight'
import { Flight, FlightFromServer } from '../types'
import {
  onlyDirectFlights,
  onlyWithLuggage,
  onlyRefundable,
  allAirlinesChecked,
  airlinesInFilter,
} from './filters.hook'

export const flights = ref<Flight[]>([])

export const shownFlights = computed(() =>
  flights.value.filter(
    flight =>
      (!onlyDirectFlights.value || flight.stops.length === 0) &&
      (!onlyWithLuggage.value || flight.luggage) &&
      (!onlyRefundable.value || flight.refundable) &&
      (allAirlinesChecked.value ||
        airlinesInFilter.value.includes(flight.carrierCode))
  )
)

export const setFlights = (list: FlightFromServer[]) => {
  flights.value = list.map(parseFlight)
}
