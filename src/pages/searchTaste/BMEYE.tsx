import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@apis/FavorApi'
import { FavorAnswerResponseType } from '@models/apis/TasteType'
import { answerState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import { useFunnel } from '@libs/hooks/useFunnel'
import { useEffect } from 'react'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import SearchAnswerStep from '@components/funnel/SearchAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'

const BMEYE = () => {
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
    ['OneAnswer1', 'OneAnswer2', 'MultiAnswer3', 'SearchAnswer4'] as const,
    {
      initialStep: 'OneAnswer1',
    },
  )

  useEffect(() => {
    setStepAnswer({ ...step, categoryName: 'BMEYE' })
  }, [])

  return (
    <Funnel>
      <Funnel.Step name="OneAnswer1">
        <OneAnswerStep
          setNextStep={() => setStep('OneAnswer2')}
          category="BMEYE"
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer2">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer3')}
          category="BMEYE"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer3">
        <MultiAnswerStep
          setNextStep={() => setStep('SearchAnswer4')}
          category="BMEYE"
          max={2}
          number={3}
        />
      </Funnel.Step>
      <Funnel.Step name="SearchAnswer4">
        <SearchAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
          }}
          category="BMEYE"
          number={4}
          isLastAnswer={true}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default BMEYE
