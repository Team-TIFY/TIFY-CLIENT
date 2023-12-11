import AnswerList from '@components/WeeklyQuestion/Answer/AnswerList'
import {
  NeighborAnswerListInfo,
  DailyAnswerContentInfo,
  DailyQuestionReport,
} from '@utils/apis/weekly/questionType'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { WeeklyApi } from '@utils/apis/weekly/WeeklyApi'
import { useEffect, useState } from 'react'
import Dimmer from '@components/layouts/Dimmer'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import SquareButton from '@components/atoms/SquareButton'
import { useMutation } from '@tanstack/react-query'
import useSnackBar from '@libs/hooks/useSnackBar'

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
  const { setSnackBar } = useSnackBar()
  const reportMutation = useMutation(WeeklyApi.REPORT_ANSWER, {
    onSuccess: (data: DailyQuestionReport) => {
      if (data.reportSuccess) {
        setSnackBar({
          comment: '신고가 완료되었어요. 빠르게 확인 후 처리할게요.',
          type: 'success',
        })
      } else {
        setSnackBar({
          comment: '이미 신고한 답변이에요.',
          type: 'error',
        })
      }
    },
    onError: () => {
      setSnackBar({
        comment: '알 수 없는 에러가 발생했어요. 관리자에게 문의해주세요.',
        type: 'error',
      })
    },
  })
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
    <AnswerListContainer>
      {dimmer && (
        <Dimmer
          blur={true}
          dimmerRef={outsideRef}
          onClick={handleClickDimmer}
        />
      )}
      <AnimationContainer num={1}>
        {myAnswer && (
          <AnswerList
            key="myAnswer"
            answerInfo={myAnswer.answerInfo}
            isMine={true}
          />
        )}
      </AnimationContainer>
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
            zIndex: dimmer && key === selectedAnswer ? '300' : '0',
            position: 'relative',
          }}
        >
          <AnimationContainer num={key + 2}>
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
          </AnimationContainer>
          {dimmer && selectedAnswer === key && (
            <SquareButton
              key={key}
              style={{ position: 'absolute', left: 2 }}
              variant="smallSquare"
              subVariant="default"
              onClick={() => {
                setDimmer(false)
                reportMutation.mutate({
                  questionId: data.answerInfo.questionId,
                  answerId: data.answerInfo.id,
                })
              }}
            >
              신고하기
            </SquareButton>
          )}
        </div>
      ))}
    </AnswerListContainer>
  )
}

export default DailyAnswerListContainer

const AnimationContainer = styled.div<{ num: number }>`
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: movetoY, fadeIn;
  animation-duration: 0.8s, 0.5s;
  animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1),
    cubic-bezier(0.61, 1, 0.88, 1);
  animation-delay: ${({ num }) => `${num * 0.4 + 0.4}s`};
`

const AnswerListContainer = styled.div`
  position: 'relative';
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`
