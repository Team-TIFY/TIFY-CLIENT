import {
  AppBar,
  AppBarProps,
  RightChildrenVariant,
} from '@components/atoms/AppBar'
import { ReactNode } from 'react'
import { favorQuestionData } from '@libs/store/dummy'
import { Navigationbar } from '@components/atoms/Navigationbar'
import { TasteType } from '@utils/apis/favor/TasteType'

type AppBarTemplateProps = AppBarProps<RightChildrenVariant> & {
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
  customHandler,
  children,
  hasNav,
}: AppBarTemplateProps) => {
  const parseStepNum = (): [number, number] => {
    if (rightChildren !== 'stepNum') {
      return [0, 0]
    }
    const favorType = window.location.href
      .split('/')[5]
      .split('?')[0] as TasteType
    const totalNum = Object.keys(favorQuestionData[favorType]).length
    const stepNum = parseInt(window.location.href.slice(-1), 10)
    if (isNaN(stepNum)) {
      return [1, totalNum]
    } else {
      return [stepNum, totalNum]
    }
  }
  return (
    <>
      {rightChildren === 'actionButton' ? (
        <AppBar
          label={label}
          variant={variant}
          beforeUrl={beforeUrl}
          onClickOption1={onClickOption1}
          onClickOption2={onClickOption2}
          customHandler={customHandler}
          rightChildren="actionButton"
          rightChildrenIcon={rightChildrenIcon}
        />
      ) : (
        <AppBar
          label={label}
          variant={variant}
          beforeUrl={beforeUrl}
          onClickOption1={onClickOption1}
          onClickOption2={onClickOption2}
          customHandler={customHandler}
          rightChildren={rightChildren}
          stepNum={parseStepNum()}
        />
      )}
      {children}
      {hasNav && <Navigationbar />}
    </>
  )
}
export default AppBarTemplate
