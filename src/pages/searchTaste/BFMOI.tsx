import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@apis/FavorApi'
import { FavorAnswerResponseType } from '@models/apis/TasteType'
import { answerState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import { useFunnel } from '@libs/hooks/useFunnel'
import { useEffect } from 'react'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'

const BFMOI = () => {
  const [step, setStepAnswer] = useRecoilState(answerState)
  const favorAnswerMutation = useMutation(FavorApi.POST_FAVOR_QUESTION, {
    onSuccess: (data: FavorAnswerResponseType) => {
      if (localStorage.getItem('isOnboardingFavor') === 'true') {
        navigate('/')
        setTimeout(() => {
          localStorage.removeItem('isOnboardingFavor')
        }, 3500)
      } else {
        setStepAnswer({ categoryName: '', favorAnswerDtos: [] })
        navigate('/profile/newTaste/question-complete')
      }
    },
  })
  const navigate = useNavigate()
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
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer3')}
          category="BFMOI"
          max={2}
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
          setNextStep={async () => {
            favorAnswerMutation.mutate(step)
          }}
          category="BFMOI"
          max={2}
          number={5}
          isLastAnswer={true}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default BFMOI
