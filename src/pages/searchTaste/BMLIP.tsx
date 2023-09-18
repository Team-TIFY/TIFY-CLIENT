import { useFunnel } from '@libs/hooks/useFunnel'
import MultiAnswerStep from '@components/funnel/MultiAnswerStep'
import OneAnswerStep from '@components/funnel/OneAnswerStep'
const BMLIP = () => {
  const [Funnel, state, setState] = useFunnel(
    ['MultiAnswer', 'OneAnswer'] as const,
    {
      initialStep: 'MultiAnswer',
    },
  ).withState<{
    count?: number
  }>({})

  return (
    <Funnel>
      <Funnel.Step name="MultiAnswer">
        <MultiAnswerStep
          setStep={() => setState({ step: 'OneAnswer', count: 1 })}
          category="BMLIP"
          max={2}
          number={1}
        />
      </Funnel.Step>
      <Funnel.Step name="OneAnswer">
        <OneAnswerStep
          setStep={() => setState({ step: 'MultiAnswer', count: 2 })}
          category="BMLIP"
          number={2}
        />
      </Funnel.Step>
      <Funnel.Step name="MultiAnswer">
        <MultiAnswerStep
          setStep={() => setState({ step: 'MultiAnswer', count: 3 })}
          category="BMLIP"
          max={2}
          number={3}
        />
      </Funnel.Step>
    </Funnel>
  )
}

export default BMLIP
