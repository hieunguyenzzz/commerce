export default function rangeMap(n: number, fn: (i: number) => any) {
  const arr = Array()
  while (n > arr.length) {
    arr.push(fn(arr.length))
  }
  return arr
}
