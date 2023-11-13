export const isArray = (arr: unknown[] | undefined): arr is unknown[] => {
  return Array.isArray(arr)
}
