import { AppBarType, RightChildrenVariantType } from '../atoms/AppBar'

export type AppBarRouteTemplatePropsType = {
  path: string
  label?: string
  hasNav?: boolean
  rightChildren?: RightChildrenVariantType
  rightChildrenIcon?: React.ReactNode[]
  isLabelAlignCenter?: boolean
  variant?: AppBarType
  beforeUrl?: string
  customHandler?: () => void
  element: React.ReactNode
}
