import styled from '@emotion/styled'
import { ReactNode, RefObject } from 'react'
import { theme } from '@styles/theme'
import { motion } from 'framer-motion'

const BottomSheet = ({
  children,
  isexpanded,
  bottomSheetRef,
}: {
  children?: ReactNode
  isexpanded: boolean
  bottomSheetRef: RefObject<HTMLDivElement>
}) => {
  return (
    <>
      <div
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
      </div>
    </>
  )
}

export default BottomSheet

const BottomSheetContainer = styled(motion.div)`
  display: flex;
  position: absolute;
  bottom: 0px;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.palette.background};
  width: 100%;
  height: 330px;
  z-index: 1000;
  border-radius: 24px 24px 0px 0px;
  padding: 16px;
  overflow: scroll;
`
