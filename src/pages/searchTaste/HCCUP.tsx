import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@utils/apis/favor/FavorApi'
import { FavorAnswerResponse } from '@utils/apis/favor/TasteType'
import { answerState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FavorAnswerDetailRequest } from '@utils/apis/favor/TasteType'
import { useFunnel } from '@libs/hooks/useFunnel'
import { useEffect } from 'react'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'

const HCCUP = () => {
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
      'OneAnswer3',
      'OneAnswer4',
      'MultiAnswer5',
    ] as const,
    {
      initialStep: 'MultiAnswer1',
    },
  )
  useEffect(() => {
    if (beforeStep.length > step.favorAnswerDtos.length) {
      navigate(-1)
    }
    setStepAnswer({ ...step, categoryName: 'HCCUP' })
  }, [step.favorAnswerDtos])
  return (
    <Funnel>
      <Funnel.Step name="MultiAnswer1">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer2')}
          category="HCCUP"
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer2">
        <MultiAnswerStep
          setNextStep={() => setStep('OneAnswer3')}
          category="HCCUP"
          number={2}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer3">
        <MultiAnswerStep
          setNextStep={() => setStep('OneAnswer4')}
          category="HCCUP"
          number={3}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer4">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer5')}
          max={2}
          category="HCCUP"
          number={4}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer5">
        <OneAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
            if (localStorage.getItem('isOnboardingFavor') === 'true') {
              navigate('/')
              //TODO: 추후 모달 창으로 변경할것!
              setTimeout(() => alert('tify 가입을 환영해요!'), 500)
            }
            localStorage.clear()
          }}
          category="HCCUP"
          number={5}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default HCCUP
