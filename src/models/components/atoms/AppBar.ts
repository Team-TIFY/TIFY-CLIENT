export type AppBarType = 'backPushWithTitle' | 'title' | 'backPush' | 'logo'

export type RightChildrenVariantType =
  | 'alarm'
  | 'dots'
  | 'none'
  | 'actionButton'
  | 'stepNum'

export type AppBarPropsType<T extends RightChildrenVariantType> = {
  variant: AppBarType
  label?: string
  beforeUrl?: string
  onClickOption?: () => void
  customHandler?: () => void
  stepNum?: [number, number]
  rightChildren: T
  rightChildrenIcon?: T extends 'alarm' | 'dots' | 'none'
    ? undefined
    : React.ReactNode[]
  isLabelAlignCenter?: boolean
}
