/* eslint-disable prettier/prettier */
import { assert } from '@utils/asset'
import deepEqual from 'fast-deep-equal'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { Funnel, FunnelProps, StepProps, Step } from '@components/funnel/Funnel'
interface SetStepOptions {
  stepChangeType?: 'push' | 'replace'
  preserveQuery?: boolean
  query?: Record<string, any>
}
export type NonEmptyArray<T> = readonly [T, ...T[]]

type RouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<
  FunnelProps<Steps>,
  'steps' | 'step'
>

type FunnelComponent<Steps extends NonEmptyArray<string>> = ((
  props: RouteFunnelProps<Steps>,
) => JSX.Element) & {
  Step: (props: StepProps<Steps>) => JSX.Element
}

const DEFAULT_STEP_QUERY_KEY = 'funnel-step'

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  steps: Steps,
  options?: {
    /**
     * 이 query key는 현재 스텝을 query string에 저장하기 위해 사용됩니다.
     * @default 'funnel-step'
     */
    stepQueryKey?: string
    initialStep?: Steps[number]
    onStepChange?: (name: Steps[number]) => void
  },
): readonly [
  FunnelComponent<Steps>,
  (step: Steps[number], options?: SetStepOptions) => void,
] & {
  withState: <
    StateExcludeStep extends Record<string, unknown> & { step?: never },
  >(
    initialState: StateExcludeStep,
  ) => [
      FunnelComponent<Steps>,
      StateExcludeStep,
      (
        next:
          | Partial<StateExcludeStep & { step: Steps[number] }>
          | ((
            next: Partial<StateExcludeStep & { step: Steps[number] }>,
          ) => StateExcludeStep & { step: Steps[number] }),
      ) => void,
    ]
} => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const stepQueryKey = options?.stepQueryKey ?? DEFAULT_STEP_QUERY_KEY

  assert(steps.length > 0, 'steps가 비어있습니다.')
  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        function RouteFunnel(props: RouteFunnelProps<Steps>) {
          const step = searchParams.get('funnel-step') ?? options?.initialStep
          console.log(step)
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
    [],
  )

  const setStep = useCallback(
    (step: Steps[number], setStepOptions?: SetStepOptions) => {
      const { preserveQuery = true, query = {} } = setStepOptions ?? {}
      const url = `${(preserveQuery ? window.location.href : '')}?${stepQueryKey}=${step}`
      const param = `?${stepQueryKey}=${step}`
      location.replace(param)
      return
    },
    [options, navigate],
  )

  /**
   * 아래부터 withState() 구현입니다.
   * 외부 함수로 분리하기 어려워 당장은 inline 해둡니다.
   * FIXME: @junyong-lee withState() 구현을 외부 함수로 분리하기
   */

  type S = Record<string, unknown>
  const [state, _setState] = useFunnelState<S>({})
  type Step = Steps[number]
  type NextState = S & { step?: Step }

  const nextPendingStepRef = useRef<Step | null>(null)
  const nextStateRef = useRef<Partial<S> | null>(null)
  const setState = useCallback(
    (next: Partial<NextState> | ((next: Partial<NextState>) => NextState)) => {
      let nextStepValue: Partial<NextState>
      if (typeof next === 'function') {
        nextStepValue = next(state)
      } else {
        nextStepValue = next
      }

      if (nextStepValue.step != null) {
        nextPendingStepRef.current = nextStepValue.step
      }
      nextStateRef.current = nextStepValue

      _setState(next)
    },
    [_setState, state],
  )

  useEffect(() => {
    if (nextPendingStepRef.current == null) {
      return
    }
    if (deepEqual(nextStateRef.current, state)) {
      setStep(nextPendingStepRef.current)
      nextPendingStepRef.current = null
    }
  }, [setStep, state])

  const initializedRef = useRef(false)
  function withState<State extends Record<string, unknown>>(
    initialState: State,
  ) {
    if (!initializedRef.current) {
      setState(initialState)
      initializedRef.current = true
    }
    return [FunnelComponent, state, setState] as const
  }

  return Object.assign([FunnelComponent, setStep] as const, {
    withState,
  }) as unknown as readonly [
    FunnelComponent<Steps>,
    (step: Steps[number], options?: SetStepOptions) => Promise<void>,
  ] & {
    withState: <
      StateExcludeStep extends Record<string, unknown> & { step?: never },
    >(
      initialState: StateExcludeStep,
    ) => [
        FunnelComponent<Steps>,
        StateExcludeStep,
        (
          next:
            | Partial<StateExcludeStep & { step: Steps[number] }>
            | ((
              next: Partial<StateExcludeStep & { step: Steps[number] }>,
            ) => StateExcludeStep & { step: Steps[number] }),
        ) => void,
      ]
  }
}

type FunnelStateId = `use-funnel-state__${string}`

function createFunnelStateId(id: string): FunnelStateId {
  return `use-funnel-state__${id}`
}

/**
 * NOTE: 이후 Secure Storage 등 다른 스토리지를 사용하도록 스펙이 변경될 수 있으므로, Asynchronous 함수로 만듭니다.
 */
function createFunnelStorage<T>(
  funnelStateId: FunnelStateId,
  storageType = 'sessionStorage',
): FunnelStorage<T> {
  switch (storageType) {
    case 'sessionStorage':
      return {
        get: async () => {
          const d = sessionStorage.getItem(funnelStateId)
          if (d == null) {
            return null
          }
          return JSON.parse(d) as Partial<T>
        },
        set: async (value: Partial<T>) => {
          sessionStorage.setItem(funnelStateId, JSON.stringify(value))
        },
        clear: async () => {
          sessionStorage.removeItem(funnelStateId)
        },
      }
    default:
      throw new Error('정확한 스토리지 타입을 명시해주세요.')
  }
}

interface FunnelStorage<T> {
  get: () => Promise<Partial<T> | null>
  set: (value: Partial<T>) => Promise<void>
  clear: () => Promise<void>
}

function useFunnelState<T extends Record<string, any>>(
  defaultValue: Partial<T>,
  options?: { storage?: FunnelStorage<T> },
) {
  const currentURL = useLocation()

  const storage =
    options?.storage ??
    createFunnelStorage<T>(createFunnelStateId(`${currentURL}`))
  const persistentStorage = useRef(storage).current

  const initialState = useQuery([], {
    queryFn: () => {
      return persistentStorage.get()
    },
    suspense: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  }).data

  const [_state, _setState] = useState<Partial<T>>(initialState ?? defaultValue)

  const setState = useCallback(
    (state: SetStateAction<Partial<T>>) => {
      _setState((prev) => {
        /**
         * React Batch Update 그리고 Local State와 Persistent Storage의 State의 일관성을 위해서 이렇게 작성했습니다.
         */
        if (typeof state === 'function') {
          const newState = state(prev)
          persistentStorage.set(newState)
          return newState
        } else {
          persistentStorage.set(state)
          return state
        }
      })
    },
    [persistentStorage],
  )

  const clearState = useCallback(() => {
    _setState({})
    persistentStorage.clear()
  }, [persistentStorage])

  return [_state, setState, clearState] as const
}
