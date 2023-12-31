import { AppBar } from '@components/atoms/AppBar'
import {
  AppBarPropsType,
  RightChildrenVariantType,
} from '@models/components/atoms/AppBar'
import { ReactNode } from 'react'
import { favorQuestionData } from '@libs/store/dummy'
import { Navigationbar } from '@components/atoms/Navigationbar'
import { TasteType } from '@models/apis/TasteType'
import styled from '@emotion/styled'

type AppBarTemplateProps = AppBarPropsType<RightChildrenVariantType> & {
  children: ReactNode
  hasNav: boolean
}

const AppBarTemplate = ({
  label,
  variant,
  beforeUrl,
  onClickOption,
  rightChildren,
  rightChildrenIcon,
  customHandler,
  isLabelAlignCenter,
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
          onClickOption={onClickOption}
          customHandler={customHandler}
          isLabelAlignCenter={isLabelAlignCenter}
          rightChildren="actionButton"
          rightChildrenIcon={rightChildrenIcon}
        />
      ) : (
        <AppBar
          label={label}
          variant={variant}
          beforeUrl={beforeUrl}
          onClickOption={onClickOption}
          customHandler={customHandler}
          isLabelAlignCenter={isLabelAlignCenter}
          rightChildren={rightChildren}
          stepNum={parseStepNum()}
        />
      )}
      {children}
      <NavigationBarContainer>
        {hasNav && <Navigationbar />}
      </NavigationBarContainer>
    </>
  )
}
export default AppBarTemplate

const NavigationBarContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
`
