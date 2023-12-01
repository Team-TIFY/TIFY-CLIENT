import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@utils/apis/favor/FavorApi'
import { FavorAnswerResponse } from '@utils/apis/favor/TasteType'
import { answerState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import { useFunnel } from '@libs/hooks/useFunnel'
import { useEffect } from 'react'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import SearchAnswerStep from '@components/funnel/SearchAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'

const BFPER = () => {
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
    [
      'OneAnswer1',
      'OneAnswer2',
      'OneAnswer3',
      'MultiAnswer4',
      'MultiAnswer5',
      'OneAnswer6',
      'SearchAnswer7',
      'SearchAnswer8',
    ] as const,
    {
      initialStep: 'OneAnswer1',
    },
  )
  useEffect(() => {
    setStepAnswer({ ...step, categoryName: 'BFPER' })
  }, [])

  return (
    <Funnel>
      <Funnel.Step name="OneAnswer1">
        <OneAnswerStep
          setNextStep={() => setStep('OneAnswer2')}
          category="BFPER"
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer2">
        <OneAnswerStep
          setNextStep={() => setStep('OneAnswer3')}
          category="BFPER"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer3">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer4')}
          category="BFPER"
          number={3}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer4">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer5')}
          max={2}
          category="BFPER"
          number={4}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer5">
        <MultiAnswerStep
          setNextStep={() => setStep('OneAnswer6')}
          category="BFPER"
          max={2}
          number={5}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer6">
        <OneAnswerStep
          setNextStep={() => setStep('SearchAnswer7')}
          category="BFPER"
          number={6}
        />
      </Funnel.Step>
      <Funnel.Step name="SearchAnswer7">
        <SearchAnswerStep
          setNextStep={() => setStep('SearchAnswer8')}
          category="BFPER"
          number={7}
        />
      </Funnel.Step>
      <Funnel.Step name="SearchAnswer8">
        <SearchAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
          }}
          category="BFPER"
          number={8}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default BFPER
