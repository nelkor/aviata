import { formDate } from '../helpers/date-formatter'

describe('formDate', () => {
  test('formDate should be defined', () => {
    expect(formDate).toBeDefined()
  })

  test('formDate should work correctly', () => {
    expect(formDate('2019/8/30 23:10')).toBe('30 авг, пт')
    expect(formDate('2022/10/9 15:27')).toBe('9 окт, вс')
  })
})
