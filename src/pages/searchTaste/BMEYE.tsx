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
import { useState } from 'react'
import { FavorAnswerDetailRequest } from '@utils/apis/favor/TasteType'

const BMEYE = () => {
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
  const [Funnel, setStep] = useFunnel(
    ['OneAnswer1', 'OneAnswer2', 'MultiAnswer3', 'SearchAnswer4'] as const,
    {
      initialStep: 'OneAnswer1',
    },
  )
  useEffect(() => {
    if (beforeStep.length > step.favorAnswerDtos.length) {
      navigate(-1)
    }
    setStepAnswer({ ...step, categoryName: 'BMEYE' })
  }, [step.favorAnswerDtos])

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
            if (localStorage.getItem('isOnboardingFavor') === 'true') {
              navigate('/')
              //TODO: 추후 모달 창으로 변경할것!
              setTimeout(() => alert('tify 가입을 환영해요!'), 500)
            }
            localStorage.clear()
          }}
          category="BMEYE"
          number={4}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default BMEYE
