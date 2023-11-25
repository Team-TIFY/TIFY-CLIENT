import { NonEmptyArray } from '@libs/hooks/useFunnel'
import { ReactNode, ReactElement, Children, isValidElement } from 'react'

export interface FunnelProps<Steps extends NonEmptyArray<string>> {
  steps: Steps
  step: Steps[number]
  children:
    | Array<ReactElement<StepProps<Steps>>>
    | ReactElement<StepProps<Steps>>
}
export const Funnel = <Steps extends NonEmptyArray<string>>({
  steps,
  step,
  children,
}: FunnelProps<Steps>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((i) =>
      steps.includes((i.props as Partial<StepProps<Steps>>).name ?? ''),
    ) as Array<ReactElement<StepProps<Steps>>>
  const targetStep = validChildren.find((child) => child.props.name === step)
  return <>{targetStep}</>
}

export interface StepProps<Steps extends NonEmptyArray<string>> {
  name: Steps[number]
  children: ReactNode
}

export const Step = <T extends NonEmptyArray<string>>({
  children,
}: StepProps<T>) => {
  return <>{children}</>
}
