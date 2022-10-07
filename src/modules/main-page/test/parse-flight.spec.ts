import { parseFlight } from '../converters/parse-flight'
import { FlightFromServer } from '../types'

const example: FlightFromServer = {
  id: '123',
  services: { '1PC': null as never },
  itineraries: [
    [
      {
        ['dep_date']: '2019/8/30 6:10',
        ['arr_date']: '2019/8/30 23:10',
        carrier: 'DV',
        ['carrier_name']: 'Scat Airlines',
        price: {
          ['price_raw']: 200000,
        },
        refundable: true,
        layovers: [4800, 0],
        traveltime: 12000,
        segments: [
          {
            origin: 'Алматы',
            ['origin_code']: 'ALA',
            dest: 'Актау',
            ['dest_code']: 'SCO',
          },
          {
            origin: 'Актау',
            ['origin_code']: 'SCO',
            dest: 'Внуково',
            ['dest_code']: 'VKO',
          },
        ],
      },
    ],
  ],
}

describe('parseFlight', () => {
  test('parseFlight should be defined', () => {
    expect(parseFlight).toBeDefined()
  })

  test('parseFlight should work correctly', () => {
    expect(parseFlight(example)).toEqual({
      arrDate: '2019/8/30 23:10',
      carrierCode: 'DV',
      carrierName: 'Scat Airlines',
      depDate: '2019/8/30 6:10',
      from: 'ALA',
      id: '123',
      luggage: 23,
      price: 200000,
      refundable: true,
      stops: [{ airport: 'Актау', time: 4800 }],
      to: 'VKO',
      traveltime: 12000,
    })
  })
})
