export const splitDataByComma = (data: string): string[] => {
  return data.split(',').map((item) => item.trim())
}
