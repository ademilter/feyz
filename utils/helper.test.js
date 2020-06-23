import { pageFill } from './helper'

describe('pageFill', () => {
  test('should return pagination numbers into array', () => {
    const pagination = pageFill(50)

    expect(Array.isArray(pagination)).toBe(true)
    expect(pagination).toMatchObject([2, 3, 4, 5])
    expect(pagination.length).toBe(4)

    const pagination2 = pageFill(10)
    expect(pagination2).toMatchObject([1])
    expect(pagination2.length).toBe(1)
  })
})
