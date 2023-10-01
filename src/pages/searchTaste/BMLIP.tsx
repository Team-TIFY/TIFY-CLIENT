import { useFunnel } from '@libs/hooks/useFunnel'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import { answerState } from '@libs/store/question'
import { useEffect } from 'react'
import { FavorAnswerRequest } from '@utils/apis/favor/TasteType'

const BMLIP = () => {
  const [step, setStepAnswer] = useRecoilState(answerState)
  const [Funnel, setStep] = useFunnel(
    ['MultiAnswer1', 'OneAnswer2', 'MultiAnswer3', 'MultiAnswer4'] as const,
    {
      initialStep: 'MultiAnswer1',
    },
  )
  // const [Funnel, state, setState] = useFunnel(
  //   ['MultiAnswer1', 'OneAnswer2', 'MultiAnswer3', 'MultiAnswer4'] as const,
  //   {
  //     initialStep: 'MultiAnswer1',
  //   },
  // ).withState<{
  //   count?: number
  //   myAnswer?: string
  // }>({})

  useEffect(() => {
    setStepAnswer({ ...step, categoryName: 'BMLIP' })
    console.log(step)
  }, [])

  return (
    <Funnel>
      <Funnel.Step name="MultiAnswer1">
        <MultiAnswerStep
          setNextStep={() => setStep('OneAnswer2')}
          category="BMLIP"
          max={2}
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer2">
        <OneAnswerStep
          setNextStep={() => setStep('MultiAnswer3')}
          category="BMLIP"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer3">
        <MultiAnswerStep
          setNextStep={() => setStep('OneAnswer2')}
          //setStep={() => setState({ step: 'MultiAnswer4', count: 3 })}
          category="BMLIP"
          max={2}
          number={3}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default BMLIP
