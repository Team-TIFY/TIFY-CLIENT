import { splitDataByComma } from './splitDataByComma'

export const processTagAnswerData = (
  answerSmallCategory: unknown,
  answerDetailCategory: unknown,
  answerNumber: number,
  targetAnswerNumberList: number[],
  showAll: boolean,
  answerContent: string,
  notAnsweredDetailCategories: any[],
  answerData: {
    smallCategory: any
    detailCategory: any
    number: number
    answer: string
    notAnsweredDetailCategories: any[]
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
        notAnsweredDetailCategories: notAnsweredDetailCategories,
      })
      answerData.push({
        smallCategory: answerSmallCategory,
        detailCategory: answerDetailCategory,
        number: answerNumber,
        answer: answer2,
        notAnsweredDetailCategories: notAnsweredDetailCategories,
      })
    } else if (answerContent.includes(',') && !showAll) {
      const [answer1, _] = splitDataByComma(answerContent)
      answerData.push({
        smallCategory: answerSmallCategory,
        detailCategory: answerDetailCategory,
        number: answerNumber,
        answer: answer1,
        notAnsweredDetailCategories: notAnsweredDetailCategories,
      })
    } else {
      answerData.push({
        smallCategory: answerSmallCategory,
        detailCategory: answerDetailCategory,
        number: answerNumber,
        answer: answerContent,
        notAnsweredDetailCategories: notAnsweredDetailCategories,
      })
    }
  }
}
