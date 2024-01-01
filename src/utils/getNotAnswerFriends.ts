import { NeighborAnswerListInfoType } from '@models/apis/QuestionType'

export const getNotAnswerFriends = (
  answerList: NeighborAnswerListInfoType[],
) => {
  if (answerList) {
    const nonAnswerList = answerList.filter(
      (data) => data.answerInfo.content === null,
    )
    if (nonAnswerList.length > 0) {
      return `답변을 하지 않은 친구가 ${nonAnswerList.length}명 있어요.`
    } else {
      return '친구들이 오늘의 질문에 모두 답했어요.'
    }
  }
  return ''
}
