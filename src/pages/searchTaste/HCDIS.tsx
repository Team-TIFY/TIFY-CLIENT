import { useRecoilState } from 'recoil'
import { useMutation } from '@tanstack/react-query'
import { FavorApi } from '@utils/apis/favor/FavorApi'
import { FavorAnswerResponse } from '@utils/apis/favor/TasteType'
import { answerState } from '@libs/store/question'
import { useNavigate } from 'react-router-dom'
import useCustomBack from '@libs/hooks/useCustomBack'
import { useFunnel } from '@libs/hooks/useFunnel'
import { useEffect } from 'react'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import SearchAnswerStep from '@components/funnel/SearchAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'
import { IsOnboard } from '@libs/store/onboard'

const HCDIS = () => {
  const [step, setStepAnswer] = useRecoilState(answerState)
  const [isOnboard, setIsOnboard] = useRecoilState(IsOnboard)
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
  const handleFunnelBackPage = useCustomBack(handleBack)
  const [Funnel, setStep] = useFunnel(
    [
      'OneAnswer1',
      'OneAnswer2',
      'OneAnswer3',
      'OneAnswer4',
      'MultiAnswer5',
      'SearchAnswer6',
    ] as const,
    {
      initialStep: 'OneAnswer1',
    },
  )
  useEffect(() => {
    handleFunnelBackPage
    setStepAnswer({ ...step, categoryName: 'HCDIS' })
  }, [])

  return (
    <Funnel>
      <Funnel.Step name="OneAnswer1">
        <OneAnswerStep
          setNextStep={() => setStep('OneAnswer2')}
          category="HCDIS"
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer2">
        <OneAnswerStep
          setNextStep={() => setStep('OneAnswer3')}
          category="HCDIS"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer3">
        <OneAnswerStep
          setNextStep={() => setStep('OneAnswer4')}
          category="HCDIS"
          number={3}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer4">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer5')}
          category="HCDIS"
          number={4}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer5">
        <MultiAnswerStep
          setNextStep={() => setStep('SearchAnswer6')}
          category="HCDIS"
          number={5}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="SearchAnswer6">
        <SearchAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
            localStorage.clear()
            if (isOnboard === false) {
              setIsOnboard(true)
              navigate('/')
              //TODO: 추후 모달 창으로 변경할것!
              setTimeout(() => alert('tify 가입을 환영해요!'), 500)
            }
          }}
          category="HCDIS"
          number={6}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default HCDIS
