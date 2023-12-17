import { splitDataByComma } from './splitDataByComma'

export const processTagAnswerData = (
  answerNumber: number,
  targetAnswerNumberList: number[],
  showAll: boolean,
  answerContent: string,
  answerData: { number: number; answer: string }[],
) => {
  if (targetAnswerNumberList.includes(answerNumber)) {
    if (answerContent.includes(',') && showAll) {
      const [answer1, answer2] = splitDataByComma(answerContent)
      answerData.push({ number: answerNumber, answer: answer1 })
      answerData.push({ number: answerNumber, answer: answer2 })
    } else if (answerContent.includes(',') && !showAll) {
      const [answer1, _] = splitDataByComma(answerContent)
      answerData.push({ number: answerNumber, answer: answer1 })
    } else {
      answerData.push({ number: answerNumber, answer: answerContent })
    }
  }
}
