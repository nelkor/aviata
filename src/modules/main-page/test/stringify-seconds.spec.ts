import { stringifySeconds } from '../helpers/date-formatter'

describe('stringifySeconds', () => {
  test('stringifySeconds should be defined', () => {
    expect(stringifySeconds).toBeDefined()
  })

  test('stringifySeconds should work correctly', () => {
    expect(stringifySeconds(1111)).toBe('0 ч 18 м')
    expect(stringifySeconds(11111)).toBe('3 ч 5 м')
  })
})
