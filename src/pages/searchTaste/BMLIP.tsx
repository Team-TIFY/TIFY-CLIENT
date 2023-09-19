import { useFunnel } from '@libs/hooks/useFunnel'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'
const BMLIP = () => {
  const [Funnel, state, setState] = useFunnel(
    ['MultiAnswer1', 'OneAnswer2', 'MultiAnswer3', 'MultiAnswer4'] as const,
    {
      initialStep: 'MultiAnswer1',
    },
  ).withState<{
    count?: number
  }>({})

  return (
    <Funnel>
      <Funnel.Step name="MultiAnswer1">
        <MultiAnswerStep
          setStep={() => setState({ step: 'OneAnswer2', count: 1 })}
          category="BMLIP"
          max={2}
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer2">
        <OneAnswerStep
          setStep={() => setState({ step: 'MultiAnswer3', count: 2 })}
          category="BMLIP"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer3">
        <MultiAnswerStep
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
