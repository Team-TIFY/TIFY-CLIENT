import { MouseEventHandler, RefObject } from 'react'

export type UseOutsideFuncType = (
  close: () => void,
) => [RefObject<HTMLDivElement>, MouseEventHandler<HTMLDivElement>]
