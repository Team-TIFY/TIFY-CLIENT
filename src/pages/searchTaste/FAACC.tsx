import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@utils/apis/favor/FavorApi'
import { FavorAnswerResponse } from '@utils/apis/favor/TasteType'
import { answerState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useFunnel } from '@libs/hooks/useFunnel'
import { useEffect } from 'react'
import OneAnswerStep from '@components/funnel/OneAnswerStep'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import { FavorAnswerDetailRequest } from '@utils/apis/favor/TasteType'

const FAACC = () => {
  const [step, setStepAnswer] = useRecoilState(answerState)
  const [beforeStep, setBeforeStep] = useState<FavorAnswerDetailRequest[]>(
    step.favorAnswerDtos,
  )
  const favorAnswerMutation = useMutation(FavorApi.POST_FAVOR_QUESTION, {
    onSuccess: (data: FavorAnswerResponse) => {
      alert('취향 답변 완료!')
      navigate('myprofile')
    },
  })
  const navigate = useNavigate()
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
    if (beforeStep.length > step.favorAnswerDtos.length) {
      navigate(-1)
    }
    setStepAnswer({ ...step, categoryName: 'FAACC' })
  }, [step.favorAnswerDtos])

  return (
    <Funnel>
      <Funnel.Step name="MultiAnswer1">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer2')}
          category="FAACC"
          number={1}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer2">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer3')}
          category="FAACC"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer3">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer4')}
          category="FAACC"
          number={3}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer4">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer5')}
          category="FAACC"
          number={4}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer5">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer6')}
          category="FAACC"
          number={5}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer6">
        <MultiAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
            if (localStorage.getItem('isOnboardingFavor') === 'true') {
              navigate('/')
              //TODO: 추후 모달 창으로 변경할것!
              setTimeout(() => alert('tify 가입을 환영해요!'), 500)
            }
            localStorage.clear()
          }}
          max={2}
          category="FAACC"
          number={6}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default FAACC
