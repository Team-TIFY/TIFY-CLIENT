const parseTotasteQuestion = (category: string) => {
  if (category === 'LIP') return 'BMLIP'
  else if (category === 'EYE') return 'BMEYE'
  else if (category === 'PERFUME') return 'BFPER'
  else if (category === 'MOISTURE') return 'BFMOI'
  else if (category === 'PLACE') return 'BFPLA'
  else if (category === 'TOP') return 'FCTOP'
  else if (category === 'FAS_PRODUCT') return 'FEFAS'
  else if (category === 'DIG_PRODUCT') return 'FEDIG'
  else if (category === 'BAG') return 'FEBAG'
}

export default parseTotasteQuestion
