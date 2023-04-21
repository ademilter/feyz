export function pageFill(count: number, perPage: number): number[] {
  const arr = Array(Math.ceil(count / perPage))
    .fill('')
    .map((_, i) => i + 1)
  if (arr.indexOf(1) === 0) arr.shift()
  return arr
}
