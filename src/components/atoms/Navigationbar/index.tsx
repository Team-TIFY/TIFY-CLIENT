import styled from "@emotion/styled"
import { theme } from "@styles/theme"
import { NavLink } from "react-router-dom"
import openEye from "../../../assets/icons/openEye.svg";

export const Navigationbar = () => {
    return (
        <Wrapper>
            <NavBtn>
                <img src={openEye}/>
            </NavBtn>
    
        
            <NavBtn>
                <img src={openEye}/>
            </NavBtn>


            <NavBtn>
                <img src={openEye}/>
            </NavBtn>
            <NavBorder/>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    border-radius: 30px;
    width: 200px;
    height: 50px;
    position: relative;
    background-color: ${theme.palette.background};
    border: 1px solid ${theme.palette.gray_800};
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.24));
`
const NavBtn = styled.button`
    flex-grow: 1
    z-index: 1;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position : relative;
    .active{
        transform: translate3d(0, -.8em , 0);
    }
`

const NavBorder = styled.div`
    position: absolute;    
    background-color: ${theme.palette.background};
    left:0;
    bottom: 99%;

`