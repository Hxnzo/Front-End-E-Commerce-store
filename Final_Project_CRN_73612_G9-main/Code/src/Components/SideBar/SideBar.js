import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './SideBarElements'

export const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick = {toggle}>

        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>

        <SideBarWrapper>

            <SideBarMenu>
                <SideBarLink to="about" onClick = {toggle}>About</SideBarLink>
                <SideBarLink to="discover" onClick = {toggle}>Discover</SideBarLink>
                <SideBarLink to="services" onClick = {toggle}>Services</SideBarLink>
                <SideBarLink to="signup" onClick = {toggle}>SignUp</SideBarLink>
            </SideBarMenu>

            <SideBtnWrap>
                <SideBarRoute to="/signin">Sign In</SideBarRoute>
            </SideBtnWrap>

        </SideBarWrapper>

    </SideBarContainer>
  )
}

export default SideBar