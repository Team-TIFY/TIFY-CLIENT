import styled from '@emotion/styled'
import { useState, useEffect, ReactNode } from 'react'
import Dimmer from '@components/layouts/Dimmer'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import { theme } from '@styles/theme'
import { motion } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { isFilterTypeState } from '@libs/store/present'

const BottomSheetTemp = ({
  delaytime,
  children,
  isexpanded,
  isFilter,
  filterType,
}: {
  delaytime?: number
  isFilter: boolean
  children?: ReactNode
  isexpanded: boolean
  filterType: string
}) => {
  const [expanded, setExpanded] = useState(isexpanded)
  const [filter, setFilter] = useRecoilState(isFilterTypeState)
  const [outsideRef, handleClickEditProfileDimmer] = useOutsideClick(() =>
    setExpanded(false),
  )
  const [filterRef, handleClickFilterDimmer] = useOutsideClick(() =>
    setFilter(''),
  )
  useEffect(() => {
    if (delaytime) {
      setTimeout(() => {
        setExpanded(false)
      }, delaytime)
    }
  }, [])

  useEffect(() => {
    setExpanded(isexpanded)
  }, [isexpanded])

  useEffect(() => {
    setFilter(filter)
  }, [filter])

  return (
    <>
      {expanded ? (
        isFilter ? (
          <Dimmer dimmerRef={filterRef} onClick={handleClickFilterDimmer} />
        ) : (
          <Dimmer
            dimmerRef={outsideRef}
            onClick={handleClickEditProfileDimmer}
          />
        )
      ) : (
        ''
      )}
      <BottomSheetContainer
        isFilter={isFilter}
        filterType={filterType}
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

export default BottomSheetTemp

const BottomSheetContainer = styled(motion.div)<{
  isFilter: boolean
  filterType: string
}>`
  display: flex;
  position: ${({ isFilter }) => (isFilter ? 'fixed' : 'absolute')};
  bottom: 0px;
  left: 0px;
  flex-direction: column;
  align-items: center;
  background-color: ${({ isFilter }) =>
    isFilter ? `${theme.palette.gray_900}` : `${theme.palette.background}`};
  width: 100%;
  height: ${({ isFilter, filterType }) =>
    isFilter ? (filterType === 'filter' ? '272px' : '392px') : '330px'};
  z-index: 1000;
  border-radius: 24px 24px 0px 0px;
  padding: 16px;
`
