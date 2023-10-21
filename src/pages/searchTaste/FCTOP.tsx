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

const FCTOP = ({ isOnBoard }: { isOnBoard?: boolean }) => {
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
    handleFunnelBackPage
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
            localStorage.clear()
          }}
          max={2}
          category="FCTOP"
          number={6}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default FCTOP
