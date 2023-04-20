export function pageFill(count: number, perPage: number) {
  return Array(Math.ceil(count / perPage))
    .fill('')
    .map((_, i) => i + 1)
}
