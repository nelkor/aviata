export interface AirlinesFilter {
  code: string
  name: string
  checked: boolean
}

export interface FlightSegment {
  origin: string
  origin_code: string
  dest: string
  dest_code: string
}

export interface FlightFromServer {
  id: string
  services: Record<string, never>
  itineraries: [
    [
      {
        arr_date: string
        carrier: string
        carrier_name: string
        dep_date: string
        price: {
          price_raw: number
        }
        refundable: boolean
        layovers: number[]
        traveltime: number
        segments: FlightSegment[]
      }
    ]
  ]
}

export interface ResponseFromServer {
  airlines: Record<string, string>
  flights: FlightFromServer[]
}

export interface FlightStop {
  time: number
  airport: string
}

export interface Flight {
  id: string
  from: string
  to: string
  carrierCode: string
  carrierName: string
  depDate: string
  arrDate: string
  luggage: number
  refundable: boolean
  price: number
  traveltime: number
  stops: FlightStop[]
}
