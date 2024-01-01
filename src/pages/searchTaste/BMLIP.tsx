import { useFunnel } from '@libs/hooks/useFunnel'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'
import { useRecoilState } from 'recoil'
import { answerState } from '@libs/store/question'
import { useEffect } from 'react'
import SearchAnswerStep from '@components/funnel/SearchAnswerStep'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@apis/FavorApi'
import { FavorAnswerResponseType } from '@models/apis/TasteType'

const BMLIP = () => {
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
      'OneAnswer2',
      'MultiAnswer3',
      'MultiAnswer4',
      'SearchAnswer5',
    ] as const,
    {
      initialStep: 'MultiAnswer1',
    },
  )

  useEffect(() => {
    setStepAnswer({ ...step, categoryName: 'BMLIP' })
  }, [])

  return (
    <Funnel>
      <Funnel.Step name="MultiAnswer1">
        <MultiAnswerStep
          setNextStep={() => setStep('OneAnswer2')}
          category="BMLIP"
          max={2}
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer2">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer3')}
          category="BMLIP"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer3">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer4')}
          category="BMLIP"
          max={2}
          number={3}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer4">
        <MultiAnswerStep
          setNextStep={() => setStep('SearchAnswer5')}
          category="BMLIP"
          max={2}
          number={4}
        />
      </Funnel.Step>
      <Funnel.Step name="SearchAnswer5">
        <SearchAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
          }}
          category="BMLIP"
          number={5}
          isLastAnswer={true}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default BMLIP
