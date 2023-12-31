import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { theme } from '@styles/theme'
import { navigationData } from '@constants/atoms/navigationData'
import { Text } from '../Text'
import Svg from '../Svg'

export const Navigationbar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [selected, setSelect] = useState<number>(
    pathname === '/' ? 1 : pathname === '/profile' ? 2 : 0,
  )

  const handleClick = (index: number) => {
    setSelect(index)
  }

  const handleClickNavigationButton = (
    index: number,
    data: (typeof navigationData)[number],
  ) => {
    handleClick(index)
    navigate(data.url)
  }

  return (
    <NavContainer>
      <Wrapper>
        {navigationData.map((data, index) => {
          return (
            <NavBtn
              key={index}
              onClick={() => handleClickNavigationButton(index, data)}
            >
              <NavBorder
                initial={{ opacity: 0, x: 0 }}
                animate={{
                  opacity: index === selected ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              />
              <Svg
                children={data.icon}
                style={{
                  paddingBottom: `${index === selected ? '30px' : '0px'}`,
                  zIndex: '30',
                }}
              />
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                style={{
                  bottom: '7px',
                  position: 'absolute',
                  display: `${selected === index ? 'block' : 'none'}`,
                }}
                whileTap={{ scale: 1.2 }}
                animate={{
                  opacity: index === selected ? 1 : 0,
                  x: index === selected ? 0 : selected < index ? -54 : +54,
                }}
                transition={{ duration: 0.5 }}
              >
                <Text className="text" typo="Caption_10" color="purple_200">
                  {navigationData[selected].title}
                </Text>
              </motion.div>
            </NavBtn>
          )
        })}
      </Wrapper>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  position: absolute;
  bottom: 40px;
  box-sizing: border-box;
  z-index: 100;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 34px;
  border-radius: 30px;
  width: 200px;
  height: 50px;
  position: relative;
  background-color: ${theme.palette.background};
  border: 1px solid ${theme.palette.gray_800};
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.12))
    drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.24));
`
const NavBtn = styled.button`
  cursor: pointer;
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
`

const NavBorder = styled(motion.div)`
  position: absolute;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${theme.palette.background};
  border-top: 1px solid ${theme.palette.gray_800};
  margin-bottom: 30px;
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.24));
`
