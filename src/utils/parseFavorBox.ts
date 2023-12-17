export const parseFavorBox = (favor: string) => {
  if (favor === 'BMLIP') return 'LIP'
  else if (favor === 'BMEYE') return 'EYE'
  else if (favor === 'BFPER') return 'PERFUME'
  else if (favor === 'BFPLA') return 'PLACE'
  else if (favor === 'FCTOP') return 'TOP'
  else if (favor === 'FEFAS') return 'FAS_PRODUCT'
  else if (favor === 'FEDIG') return 'DIG_PRODUCT'
  else if (favor === 'FEBAG') return 'BAG'
  else if (favor === 'FAACC') return 'ACCESSORY'
  else if (favor === 'HCDIS') return 'DISH'
  else if (favor === 'HEEXE') return 'EXERCISE'
  return ''
}
