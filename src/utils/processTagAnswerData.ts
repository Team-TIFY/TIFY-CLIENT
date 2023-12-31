import { SubCategoryValueType, DetailCategoryValueType } from '@models/favor'
import { splitDataByComma } from './splitDataByComma'

export const processTagAnswerData = (
  answerSmallCategory: SubCategoryValueType,
  answerDetailCategory: DetailCategoryValueType,
  answerNumber: number,
  targetAnswerNumberList: number[],
  showAll: boolean,
  answerContent: string,
  notAnsweredDetailCategories: DetailCategoryValueType[],
  answerData: {
    smallCategory: SubCategoryValueType
    detailCategory: DetailCategoryValueType
    number: number
    answer: string
    notAnsweredDetailCategories: DetailCategoryValueType[]
  }[],
) => {
  if (!targetAnswerNumberList.includes(answerNumber)) {
    return
  }

  const splitAnswers = answerContent.includes(',')
    ? splitDataByComma(answerContent)
    : [answerContent]
  const answers = showAll ? splitAnswers : [splitAnswers[0]]

  answers.forEach((answer) => {
    answerData.push({
      smallCategory: answerSmallCategory,
      detailCategory: answerDetailCategory,
      number: answerNumber,
      answer: answer.trim(),
      notAnsweredDetailCategories: notAnsweredDetailCategories,
    })
  })
}
