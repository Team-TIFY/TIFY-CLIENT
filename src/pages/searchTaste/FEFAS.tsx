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
import OneAnswerStep from '@components/funnel/OneAnswerStep'

const FEFAS = () => {
  const [step, setStepAnswer] = useRecoilState(answerState)
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
      'MultiAnswer2',
      'MultiAnswer3',
      'MultiAnswer4',
      'OneAnswer5',
      'MultiAnswer6',
      'OneAnswer7',
      'MultiAnswer8',
    ] as const,
    {
      initialStep: 'OneAnswer1',
    },
  )
  useEffect(() => {
    handleFunnelBackPage
    setStepAnswer({ ...step, categoryName: 'FEFAS' })
  }, [])

  return (
    <Funnel>
      <Funnel.Step name="OneAnswer1">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer2')}
          category="FEFAS"
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer2">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer3')}
          category="FEFAS"
          number={2}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer3">
        <MultiAnswerStep
          setNextStep={() => setStep('MultiAnswer4')}
          category="FEFAS"
          number={3}
          max={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer4">
        <MultiAnswerStep
          setNextStep={() => setStep('OneAnswer5')}
          max={2}
          category="FEFAS"
          number={4}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer5">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer6')}
          category="FEFAS"
          number={5}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer6">
        <MultiAnswerStep
          setNextStep={() => setStep('OneAnswer7')}
          max={2}
          category="FEFAS"
          number={6}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer7">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer8')}
          category="FEFAS"
          number={7}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer8">
        <MultiAnswerStep
          setNextStep={() => {
            favorAnswerMutation.mutate(step)
            localStorage.clear()
          }}
          max={2}
          category="FEFAS"
          number={8}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default FEFAS
