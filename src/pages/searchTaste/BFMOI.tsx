import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@utils/apis/favor/FavorApi'
import { FavorAnswerResponse } from '@utils/apis/favor/TasteType'
import { answerState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import useCustomBack from '@libs/hooks/useCustomBack'
import { useFunnel } from '@libs/hooks/useFunnel'
import { useEffect } from 'react'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'

const BFMOI = ({ isOnBoard }: { isOnBoard?: boolean }) => {
  const [step, setStepAnswer] = useRecoilState(answerState)
  const favorAnswerMutation = useMutation(FavorApi.POST_FAVOR_QUESTION, {
    onSuccess: (data: FavorAnswerResponse) => {
      alert('취향 답변 완료!')
      navigate('myprofile')
    },
  })
  const handleBack = () => {
    if (step.favorAnswerDtos.length > 0) {
      const myAnswerList = [...step.favorAnswerDtos]
      const newFavorAnswerDtos = myAnswerList.splice(0, myAnswerList.length - 1)
      setStepAnswer({
        ...step,
        favorAnswerDtos: [...newFavorAnswerDtos],
      })
    }
    navigate(-1)
  }
  const navigate = useNavigate()
  const handleFunnelBackPage = useCustomBack(handleBack)
  const [Funnel, setStep] = useFunnel(
    [
      'MultiAnswer1',
      'MultiAnswer2',
      'MultiAnswer3',
      'OneAnswer4',
      'MultiAnswer5',
    ] as const,
    {
      initialStep: 'MultiAnswer1',
    },
  )
  useEffect(() => {
    handleFunnelBackPage
    setStepAnswer({ ...step, categoryName: 'BFMOI' })
  }, [])

  return (
    <Funnel>
      <Funnel.Step name="MultiAnswer1">
        <MultiAnswerStep
          max={2}
          setNextStep={() => setStep('MultiAnswer2')}
          category="BFMOI"
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer2">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer3')}
          category="BFMOI"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer3">
        <MultiAnswerStep
          setNextStep={() => setStep('OneAnswer4')}
          category="BFMOI"
          max={2}
          number={3}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer4">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer5')}
          category="BFMOI"
          number={4}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer5">
        <MultiAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
            localStorage.clear()
          }}
          category="BFMOI"
          max={2}
          number={5}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default BFMOI
