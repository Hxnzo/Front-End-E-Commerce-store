import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaExclamationTriangle, FaShoppingCart } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements'
import { Icon } from '../SideBar/SideBarElements';

const NavBar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 125) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavBarContainer>
                        <NavLogo to='/' onClick={toggleHome} style={{ color: '#FFA500' }}>Orange Tech</NavLogo>

                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>

                        <NavMenu>
                            {/*<NavItem>
                                <NavLinks to="admin" smooth={true} duration={500} spy={true} exact='true' offset={-79}>
                                    <Link to={"admin"} style={{ textDecoration: 'none', color: '#fff' }}>Admin</Link>
                                </NavLinks>
                            </NavItem>*/}
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="products" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Products</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contactus" smooth={true} duration={500} spy={true} exact='true' offset={-79}>
                                    <Link to={"contactus"} style={{ textDecoration: 'none', color: '#fff' }}>Contact Us</Link>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signin" smooth={true} duration={500} spy={true} exact='true' offset={-79}>
                                    <Link to={"signin"} style={{ textDecoration: 'none', color: '#fff' }}>Sign In</Link>
                                </NavLinks>
                            </NavItem>

                        </NavMenu>

                        <NavBtn>
                            <NavBtnLink to="/cart"><FaShoppingCart color='#010606' /></NavBtnLink>
                        </NavBtn>

                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar