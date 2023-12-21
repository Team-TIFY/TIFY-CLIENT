import { splitDataByComma } from './splitDataByComma'

export const processTagAnswerData = (
  answerSmallCategory: unknown,
  answerDetailCategory: unknown,
  answerNumber: number,
  targetAnswerNumberList: number[],
  showAll: boolean,
  answerContent: string,
  allDetailCategoryAnswered: boolean,
  answerData: {
    smallCategory: any
    detailCategory: any
    number: number
    answer: string
    allDetailCategoryAnswered: boolean
  }[],
) => {
  if (targetAnswerNumberList.includes(answerNumber)) {
    if (answerContent.includes(',') && showAll) {
      const [answer1, answer2] = splitDataByComma(answerContent)
      answerData.push({
        smallCategory: answerSmallCategory,
        detailCategory: answerDetailCategory,
        number: answerNumber,
        answer: answer1,
        allDetailCategoryAnswered: allDetailCategoryAnswered,
      })
      answerData.push({
        smallCategory: answerSmallCategory,
        detailCategory: answerDetailCategory,
        number: answerNumber,
        answer: answer2,
        allDetailCategoryAnswered: allDetailCategoryAnswered,
      })
    } else if (answerContent.includes(',') && !showAll) {
      const [answer1, _] = splitDataByComma(answerContent)
      answerData.push({
        smallCategory: answerSmallCategory,
        detailCategory: answerDetailCategory,
        number: answerNumber,
        answer: answer1,
        allDetailCategoryAnswered: allDetailCategoryAnswered,
      })
    } else {
      answerData.push({
        smallCategory: answerSmallCategory,
        detailCategory: answerDetailCategory,
        number: answerNumber,
        answer: answerContent,
        allDetailCategoryAnswered: allDetailCategoryAnswered,
      })
    }
  }
}
