import { assert } from '@utils/assert'
import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useMemo } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import { Funnel, FunnelProps, StepProps, Step } from '@components/funnel/Funnel'

export type NonEmptyArray<T> = readonly [T, ...T[]]

interface SetStepOptions {
  stepChangeType?: 'push' | 'replace'
  preserveQuery?: boolean
  query?: Record<string, any>
}

type RouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<
  FunnelProps<Steps>,
  'steps' | 'step'
>

type FunnelComponent<Steps extends NonEmptyArray<string>> = ((
  props: RouteFunnelProps<Steps>,
) => JSX.Element) & {
  Step: (props: StepProps<Steps>) => JSX.Element
}

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  steps: Steps,
  options?: {
    initialStep?: Steps[number]
    onStepChange?: (name: Steps[number]) => void
  },
): readonly [
  FunnelComponent<Steps>,
  (step: Steps[number], options?: SetStepOptions) => void,
] => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const step = searchParams.get('funnel-step') as unknown as string
  const stepQueryKey = 'funnel-step'

  useEffect(() => {
    if (options?.initialStep) {
      navigate({ pathname: location.pathname })
    }
  }, [])
  assert(steps.length > 0, 'steps가 비어있습니다.')

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        function RouteFunnel(props: RouteFunnelProps<Steps>) {
          const step = searchParams.get('funnel-step') ?? options?.initialStep
          assert(
            step != null,
            `표시할 스텝을 ${stepQueryKey} 쿼리 파라미터에 지정해주세요. 쿼리 파라미터가 없을 때 초기 스텝을 렌더하려면 useFunnel의 두 번째 파라미터 options에 initialStep을 지정해주세요.`,
          )

          return <Funnel<Steps> steps={steps} step={step} {...props} />
        },
        {
          Step,
        },
      ),
    [step],
  )
  const setStep = (step: Steps[number], setStepOptions?: SetStepOptions) => {
    navigate({ pathname: location.pathname, search: `?funnel-step=${step}` })
    return
  }
  return [FunnelComponent, setStep] as unknown as readonly [
    FunnelComponent<Steps>,
    (step: Steps[number], options?: SetStepOptions) => Promise<void>,
  ]
}
