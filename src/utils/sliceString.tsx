export type sliceStringFunc = (string: string, length: number) => string

export const sliceString: sliceStringFunc = (string, length) => {
  return string.length > length ? string.slice(0, length - 1) + '···' : string
}
