import styled from "@emotion/styled"
import { theme } from "@styles/theme"
import Rocket from "@assets/icons/rocket.svg"
import Cherry from "@assets/icons/cherry.svg"
import Flying from "@assets/icons/flying.svg"
import { useNavigate } from "react-router-dom"
import { ButtonHTMLAttributes, useState } from "react"
import { useRef } from "react"
import { Text } from "../Text"

export const Navigationbar = () => {
    const [select, setSelect] = useState<number>(1);
    const navRef = useRef<any>([]);
    const handleClick = (index: number)=> {
        if(select === index) return;
        navRef.current[select].classList.remove('active')
        setSelect(index)
        navRef.current[select].classList.add('active')
    }

    return (
        <NavContainer>
            <Wrapper>
                <NavBorder select={select}/>
                <NavBtn className={select === 0 ? 'active' : ''} onClick={() => handleClick(0)} ref={elem => (navRef.current[0] = elem)}>
                    <img src={Rocket}/>
                    <Text className="text" typo={'Caption_10'} color={'purple_200'}>프렌즈</Text>
                </NavBtn>
                <NavBtn className={select === 1 ? 'active' : ''} onClick={() => handleClick(1)} ref={elem => (navRef.current[1] = elem)}>
                    <img src={Cherry}/>
                    <Text className="text" typo={'Caption_10'} color={'purple_200'}>위클리</Text>
                </NavBtn>
                <NavBtn className={select === 2 ? 'active' : ''} onClick={() => handleClick(2)} ref={elem => (navRef.current[2] = elem)}>
                    <img src={Flying} />
                    <Text className="text" typo={'Caption_10'} color={'purple_200'}>마이</Text>
                </NavBtn>
            </Wrapper>
        </NavContainer>
    )
}
const NavContainer = styled.nav`
    position: absolute;
    bottom : 40px;
    left: 50%;
    bottom: 40px;
    transform: translate(-50%, 0);
    box-sizing: border-box;
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
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.24));
    .active{
        padding-bottom: 10px;
        & > h1 {
            display: block;
        }
    }
`
const NavBtn = styled.button`
    cursor: pointer;
    gap: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position : relative;
    background-color: transparent;
    & .text {
        display: none;
    }
`

const NavBorder = styled.div<{select : number}>`
    position: absolute;    
    width: 45px;
    height: 35px;
    border-radius: 50% 50% 0px 0px;
    background-color: ${theme.palette.background};
    border-top: 1px solid ${theme.palette.gray_800};
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.24));
    left: 27px;
    left: ${({select}) => 25 + select * 52.5}px;
    top: -12px;

`