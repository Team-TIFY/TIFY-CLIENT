import { subCategoryType } from '@utils/apis/user/UserType'

const parseTotasteQuestion = (category: subCategoryType) => {
  if (category === 'MAKEUP') return 'BMLIP'
  else if (category === 'FRAGRANCE') return 'BFPER'
}

export default parseTotasteQuestion
