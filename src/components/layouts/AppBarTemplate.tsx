import { AppBar, AppBarProps } from '@components/atoms/AppBar'
import { ReactNode } from 'react'
import { Navigationbar } from '@components/atoms/Navigationbar'

type AppBarTemplateProps = AppBarProps & {
  children: ReactNode
  hasNav: boolean
}

const AppBarTemplate = ({
  label,
  variant,
  beforeUrl,
  onClickOption1,
  onClickOption2,
  rightChildren,
  rightChildrenIcon,
  children,
  hasNav,
}: AppBarTemplateProps) => {
  return (
    <>
      {rightChildren === 'actionButton' ? (
        <AppBar
          label={label}
          variant={variant}
          beforeUrl={beforeUrl}
          onClickOption1={onClickOption1}
          onClickOption2={onClickOption2}
          rightChildren={'actionButton'}
          rightChildrenIcon={rightChildrenIcon}
        />
      ) : (
        <AppBar
          label={label}
          variant={variant}
          beforeUrl={beforeUrl}
          onClickOption1={onClickOption1}
          onClickOption2={onClickOption2}
          rightChildren={rightChildren}
        />
      )}
      {children}
      {hasNav && <Navigationbar />}
    </>
  )
}
export default AppBarTemplate
