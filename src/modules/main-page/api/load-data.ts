import { getRawJson } from '@/net'

import { setAirlines } from '../hooks/filters.hook'
import { setFlights } from '../hooks/flights.hook'
import { ResponseFromServer } from '../types'

export const loadData = async () => {
  const results: ResponseFromServer = await getRawJson('/results.json')

  setAirlines(results.airlines)
  setFlights(results.flights)
}
