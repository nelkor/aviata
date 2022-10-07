import { getDateDiffLabel } from '../helpers/date-formatter'

describe('getDateDiffLabel', () => {
  test('getDateDiffLabel should be defined', () => {
    expect(getDateDiffLabel).toBeDefined()
  })

  test('getDateDiffLabel should work correctly', () => {
    expect(getDateDiffLabel('2019/8/30 23:59', '2019/8/31 00:00')).toBe('+1')
    expect(getDateDiffLabel('2022/10/9 00:00', '2022/10/9 23:59')).toBe('')
    expect(getDateDiffLabel('2022/10/1 23:59', '2022/10/9 23:59')).toBe('+8')
  })
})
