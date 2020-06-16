export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function pageFill(count) {
  const arr = Array(Math.ceil(count / process.env.PER_PAGE))
    .fill()
    .map((_, i) => i + 1)
  if (arr.length > 1) arr.shift()
  return arr
}
