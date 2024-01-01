import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@apis/FavorApi'
import { FavorAnswerResponseType } from '@models/apis/TasteType'
import { answerState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import { useFunnel } from '@libs/hooks/useFunnel'
import { useEffect } from 'react'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'

const FCTOP = () => {
  const navigate = useNavigate()
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

  const [Funnel, setStep] = useFunnel(
    [
      'MultiAnswer1',
      'MultiAnswer2',
      'MultiAnswer3',
      'MultiAnswer4',
      'MultiAnswer5',
      'MultiAnswer6',
    ] as const,
    {
      initialStep: 'MultiAnswer1',
    },
  )
  useEffect(() => {
    setStepAnswer({ ...step, categoryName: 'FCTOP' })
  }, [])

  return (
    <Funnel>
      <Funnel.Step name="MultiAnswer1">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer2')}
          category="FCTOP"
          number={1}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer2">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer3')}
          category="FCTOP"
          number={2}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer3">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer4')}
          category="FCTOP"
          number={3}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer4">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer5')}
          max={2}
          category="FCTOP"
          number={4}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer5">
        <MultiAnswerStep
          max={2}
          setNextStep={() => setStep('MultiAnswer6')}
          category="FCTOP"
          number={5}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer6">
        <MultiAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
          }}
          max={2}
          category="FCTOP"
          number={6}
          isLastAnswer={true}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default FCTOP
