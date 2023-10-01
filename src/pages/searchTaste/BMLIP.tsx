import { useFunnel } from '@libs/hooks/useFunnel'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'
import { useRecoilState } from 'recoil'
import { answerState } from '@libs/store/question'
import { useEffect } from 'react'
import SearchAnswerStep from '@components/funnel/SearchAnswerStep'

const BMLIP = () => {
  const [step, setStepAnswer] = useRecoilState(answerState)
  const [Funnel, setStep] = useFunnel(
    [
      'MultiAnswer1',
      'OneAnswer2',
      'MultiAnswer3',
      'MultiAnswer4',
      'SearchAnswer5',
    ] as const,
    {
      initialStep: 'MultiAnswer1',
    },
  )
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
          setNextStep={() => setStep('MultiAnswer4')}
          category="BMLIP"
          max={2}
          number={3}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer4">
        <MultiAnswerStep
          setNextStep={() => setStep('SearchAnswer5')}
          category="BMLIP"
          max={2}
          number={4}
        />
      </Funnel.Step>
      <Funnel.Step name="SearchAnswer5">
        <SearchAnswerStep
          setNextStep={() => setStep('OneAnswer2')}
          category="BMLIP"
          number={5}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default BMLIP
