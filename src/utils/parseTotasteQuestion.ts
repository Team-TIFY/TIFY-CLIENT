import { subCategoryType } from '@libs/types/UserType'

const parseTotasteQuestion = (category: subCategoryType) => {
  if (category === 'MAKEUP') return 'BMLIP'
  else if (category === 'FRAGRANCE') return 'BFPER'
}

export default parseTotasteQuestion
