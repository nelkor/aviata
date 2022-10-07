import { pickTime } from '../helpers/date-formatter'

describe('pickTime', () => {
  test('pickTime should be defined', () => {
    expect(pickTime).toBeDefined()
  })

  test('pickTime should work correctly', () => {
    expect(pickTime('2019/8/30 23:10')).toBe('23:10')
  })
})
