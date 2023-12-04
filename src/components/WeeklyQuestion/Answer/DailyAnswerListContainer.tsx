import AnswerList from '@components/WeeklyQuestion/Answer/AnswerList'
import {
  NeighborAnswerListInfo,
  DailyAnswerContentInfo,
} from '@utils/apis/weekly/questionType'
import { useQuery } from '@tanstack/react-query'
import { WeeklyApi } from '@utils/apis/weekly/WeeklyApi'
import { useEffect, useState } from 'react'
import Dimmer from '@components/layouts/Dimmer'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import SquareButton from '@components/atoms/SquareButton'

const DailyAnswerListContainer = ({
  answerData,
  questionId,
}: {
  answerData: NeighborAnswerListInfo[]
  questionId: number
}) => {
  const [myAnswer, setMyAnswer] = useState<DailyAnswerContentInfo>()
  const [dimmer, setDimmer] = useState<boolean>(false)
  const [selectedAnswer, setSelectedAnswer] = useState(-1)
  const [outsideRef, handleClickDimmer] = useOutsideClick(() =>
    setDimmer(false),
  )
  const { data: answerLists } = useQuery(['todayAnswer'], () =>
    WeeklyApi.GET_ANSWERS({
      questionId: questionId,
    }),
  )

  useEffect(() => {
    if (answerLists) {
      const myAnswer = answerLists.filter((data) => data.isMine)
      setMyAnswer(myAnswer[0])
    }
  }, [answerLists])

  answerData.sort((a, b) => {
    if (a.answerInfo.content !== null && b.answerInfo.content === null) {
      return -1
    } else if (a.answerInfo === null && b.answerInfo.content !== null) {
      return 1
    }
    return 0
  })

  return (
    <div>
      {dimmer && <Dimmer dimmerRef={outsideRef} onClick={handleClickDimmer} />}
      {myAnswer && (
        <AnswerList
          key="myAnswer"
          answerInfo={myAnswer.answerInfo}
          isMine={true}
        />
      )}
      {answerData.map((data, key) => (
        <div
          key={key}
          onClick={() => {
            if (!data.answerInfo.content) {
              return
            } else {
              setDimmer(true)
              setSelectedAnswer(key)
            }
          }}
          style={{
            zIndex: dimmer && key === selectedAnswer ? '500' : '0',
            position: 'relative',
          }}
        >
          <AnswerList
            answerInfo={
              data.answerInfo.userId
                ? data.answerInfo
                : {
                    ...data.answerInfo,
                    userId: data.neighborInfo.neighborId,
                  }
            }
            isMine={false}
          />
          {dimmer && selectedAnswer === key && (
            <SquareButton
              key={key}
              style={{ position: 'absolute' }}
              variant="smallSquare"
              subVariant="default"
              onClick={() => {
                setDimmer(false)
                //TODO: 신고 API 연결
              }}
            >
              신고하기
            </SquareButton>
          )}
        </div>
      ))}
    </div>
  )
}

export default DailyAnswerListContainer
