import { PER_PAGE } from '../constants'

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function pageFill(count) {
  const arr = Array(Math.ceil(count / PER_PAGE))
    .fill()
    .map((_, i) => i + 1)
  arr.shift()
  return arr
}
