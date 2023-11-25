const parseTotasteQuestion = (category: string) => {
  if (category === 'LIP') return 'BMLIP'
  else if (category === 'EYE') return 'BMEYE'
  else if (category === 'PERFUME') return 'BFPER'
  else if (category === 'MOISTURE') return 'BFMOI'
  else if (category === 'PLACE') return 'BFPLA'
  else if (category === 'TOP') return 'FCTOP'
  else if (category === 'ACCESSORY') return 'FAACC'
  else if (category === 'FAS_PRODUCT') return 'FEFAS'
  else if (category === 'DIG_PRODUCT') return 'FEDIG'
  else if (category === 'BAG') return 'FEBAG'
  else if (category === 'DISH') return 'HCDIS'
  else if (category === 'CUP') return 'HCCUP'
}

export default parseTotasteQuestion
