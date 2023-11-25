import styled from '@emotion/styled'
import { useState, useEffect, ReactNode } from 'react'
import Dimmer from '@components/layouts/Dimmer'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import { theme } from '@styles/theme'
import { motion } from 'framer-motion'

const BottomSheet = ({
  delaytime,
  children,
}: {
  delaytime?: number
  children?: ReactNode
}) => {
  const [expanded, setExpanded] = useState(true)
  const [outsideRef, handleClickEditProfileDimmer] = useOutsideClick(() =>
    setExpanded(false),
  )
  useEffect(() => {
    if (delaytime) {
      setTimeout(() => {
        setExpanded(false)
      }, delaytime)
    }
  }, [])

  return (
    <>
      {expanded ? (
        <Dimmer dimmerRef={outsideRef} onClick={handleClickEditProfileDimmer} />
      ) : (
        ''
      )}
      <BottomSheetContainer
        initial={{ y: '100%' }}
        animate={{ y: expanded ? '0%' : '100%' }}
        transition={{
          duration: 1,
          type: 'spring',
          damping: 40,
          stiffness: 400,
        }}
      >
        <div
          style={{
            borderRadius: '40px',
            width: '32px',
            height: '4px',
            backgroundColor: `${theme.palette.gray_500}`,
            marginBottom: '60px',
          }}
        />
        {children}
      </BottomSheetContainer>
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
`
