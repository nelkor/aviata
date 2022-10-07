import { getShortKey } from '../get-short-key'

describe('short keys for translations', () => {
  test('getShortKey should be defined', () => {
    expect(getShortKey).toBeDefined()
  })

  test('getShortKey should work correctly', () => {
    expect(getShortKey(0)).toBe('a')
    expect(getShortKey(30)).toBe('E')
    expect(getShortKey(300)).toBe('ea')
    expect(getShortKey(3000)).toBe('VI')
    expect(getShortKey(30000)).toBe('g7c')
  })
})
