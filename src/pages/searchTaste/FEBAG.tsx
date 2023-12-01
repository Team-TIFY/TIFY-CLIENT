import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@utils/apis/favor/FavorApi'
import { FavorAnswerResponse } from '@utils/apis/favor/TasteType'
import { answerState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import { useFunnel } from '@libs/hooks/useFunnel'
import { useEffect } from 'react'
import OneAnswerStep from '@components/funnel/OneAnswerStep'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'

const FEBAG = () => {
  const [step, setStepAnswer] = useRecoilState(answerState)
  const navigate = useNavigate()
  const favorAnswerMutation = useMutation(FavorApi.POST_FAVOR_QUESTION, {
    onSuccess: (data: FavorAnswerResponse) => {
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
  const [Funnel, setStep] = useFunnel(
    ['MultiAnswer1', 'OneAnswer2', 'MultiAnswer3', 'MultiAnswer4'] as const,
    {
      initialStep: 'MultiAnswer1',
    },
  )

  useEffect(() => {
    setStepAnswer({ ...step, categoryName: 'FEBAG' })
  }, [])

  return (
    <Funnel>
      <Funnel.Step name="MultiAnswer1">
        <MultiAnswerStep
          setNextStep={() => setStep('OneAnswer2')}
          category="FEBAG"
          number={1}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer2">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer3')}
          category="FEBAG"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer3">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer4')}
          category="FEBAG"
          number={3}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer4">
        <MultiAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
          }}
          max={2}
          category="FEBAG"
          number={4}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default FEBAG
