import { FlightFromServer, Flight, FlightSegment, FlightStop } from '../types'

const parseLuggage = (str: string): number =>
  ({
    '1PC': 23,
    '20KG': 20,
  }[str] || 0)

const parseStops = (
  layovers: number[],
  segments: FlightSegment[]
): FlightStop[] =>
  Array.from({ length: layovers.length - 1 }, (_, i) => ({
    time: layovers[i],
    airport: segments[i].dest,
  }))

const parseFromTo = (segments: FlightSegment[]) => ({
  from: segments[0].origin_code,
  to: segments[segments.length - 1].dest_code,
})

export const parseFlight = (fromServer: FlightFromServer): Flight => {
  const route = fromServer.itineraries[0][0]

  return {
    id: fromServer.id,
    carrierCode: route.carrier,
    carrierName: route.carrier_name,
    depDate: route.dep_date,
    arrDate: route.arr_date,
    luggage: parseLuggage(Object.keys(fromServer.services)[0]),
    refundable: route.refundable,
    price: route.price.price_raw,
    traveltime: route.traveltime,
    stops: parseStops(route.layovers, route.segments),
    ...parseFromTo(route.segments),
  }
}
