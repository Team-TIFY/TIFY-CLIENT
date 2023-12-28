import { ReactNode, RefObject } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'

const BottomSheet = ({
  children,
  isexpanded,
  bottomSheetRef,
  filterType,
}: {
  children?: ReactNode
  isexpanded: boolean
  bottomSheetRef: RefObject<HTMLDivElement>
  filterType?: string
}) => {
  return (
    <>
      <BottomSheetBackground
        className="background"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          zIndex: '101',
          backgroundColor: `${theme.palette.dim_500}`,
          display: `${isexpanded ? 'block' : 'none'}`,
        }}
      >
        <BottomSheetContainer
          ref={bottomSheetRef}
          filterType={filterType}
          initial={{ y: '100%' }}
          animate={{ y: isexpanded ? '0%' : '100%' }}
          transition={{
            duration: 1,
            type: 'spring',
            damping: 40,
            stiffness: 400,
          }}
        >
          {children}
        </BottomSheetContainer>
      </BottomSheetBackground>
    </>
  )
}

export default BottomSheet

const BottomSheetBackground = styled.div``

const BottomSheetContainer = styled(motion.div)<{
  filterType: string | undefined
}>`
  display: flex;
  position: absolute;
  bottom: 0px;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.palette.gray_900};
  width: 100%;
  height: ${({ filterType }) =>
    filterType ? (filterType === 'filter' ? '272px' : '392px') : '330px'};
  z-index: 1000;
  border-radius: 24px 24px 0px 0px;
  padding: 16px;
  overflow: scroll;
`
