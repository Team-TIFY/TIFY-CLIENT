import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@apis/FavorApi'
import { FavorAnswerResponse } from '@models/apis/TasteType'
import { answerState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import { useFunnel } from '@libs/hooks/useFunnel'
import { useEffect } from 'react'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import SearchAnswerStep from '@components/funnel/SearchAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'

const FEDIG = () => {
  const [step, setStepAnswer] = useRecoilState(answerState)
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
  const navigate = useNavigate()

  const [Funnel, setStep] = useFunnel(
    [
      'SearchAnswer1',
      'OneAnswer2',
      'OneAnswer3',
      'OneAnswer4',
      'OneAnswer5',
      'MultiAnswer6',
      'MultiAnswer7',
    ] as const,
    {
      initialStep: 'SearchAnswer1',
    },
  )

  useEffect(() => {
    setStepAnswer({ ...step, categoryName: 'FEDIG' })
  }, [])

  return (
    <Funnel>
      <Funnel.Step name="SearchAnswer1">
        <SearchAnswerStep
          setNextStep={() => setStep('OneAnswer2')}
          category="FEDIG"
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer2">
        <OneAnswerStep
          setNextStep={() => setStep('OneAnswer3')}
          category="FEDIG"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer3">
        <OneAnswerStep
          setNextStep={() => setStep('OneAnswer4')}
          category="FEDIG"
          number={3}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer4">
        <OneAnswerStep
          setNextStep={() => setStep('OneAnswer5')}
          category="FEDIG"
          number={4}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer5">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer6')}
          category="FEDIG"
          number={5}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer6">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer7')}
          category="FEDIG"
          max={2}
          number={6}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer7">
        <MultiAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
          }}
          max={2}
          category="FEDIG"
          number={7}
          isLastAnswer={true}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default FEDIG
