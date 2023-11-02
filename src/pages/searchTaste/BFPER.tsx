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

const BFPER = ({ isOnBoard }: { isOnBoard?: boolean }) => {
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
      'OneAnswer2',
      'OneAnswer3',
      'MultiAnswer4',
      'OneAnswer5',
      'OneAnswer6',
      'SearchAnswer7',
      'SearchAnswer8',
    ] as const,
    {
      initialStep: 'OneAnswer1',
    },
  )
  useEffect(() => {
    handleFunnelBackPage
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
          setNextStep={() => setStep('OneAnswer5')}
          max={2}
          category="BFPER"
          number={4}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer5">
        <OneAnswerStep
          setNextStep={() => setStep('OneAnswer6')}
          category="BFPER"
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
            if (localStorage.getItem('isOnboardingFavor') === 'true') {
              navigate('/')
              //TODO: 추후 모달 창으로 변경할것!
              setTimeout(() => alert('tify 가입을 환영해요!'), 500)
            }
            localStorage.clear()
          }}
          category="BFPER"
          number={8}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default BFPER
