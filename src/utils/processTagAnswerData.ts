import { splitDataByComma } from './splitDataByComma'

export const processTagAnswerData = (
  answerSmallCategory: unknown,
  answerDetailCategory: unknown,
  answerNumber: number,
  targetAnswerNumberList: number[],
  showAll: boolean,
  answerContent: string,
  answerData: {
    smallCategory: any
    detailCategory: any
    number: number
    answer: string
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
      })
      answerData.push({
        smallCategory: answerSmallCategory,
        detailCategory: answerDetailCategory,
        number: answerNumber,
        answer: answer2,
      })
    } else if (answerContent.includes(',') && !showAll) {
      const [answer1, _] = splitDataByComma(answerContent)
      answerData.push({
        smallCategory: answerSmallCategory,
        detailCategory: answerDetailCategory,
        number: answerNumber,
        answer: answer1,
      })
    } else {
      answerData.push({
        smallCategory: answerSmallCategory,
        detailCategory: answerDetailCategory,
        number: answerNumber,
        answer: answerContent,
      })
    }
  }
}
