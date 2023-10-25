import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';
import ButtonNav from './ButtonNav';
import NavBarRight from './NavBarRight'

const NavBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const Nav = styled.nav` 
    padding: 0 2rem 0 2rem;
    width: 35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Img = styled.div`
    background-image: url(src/assets/image/svg_20230707_232204_0000.svg);
    background-position: center;
    background-size: cover;
    width: 10rem;
    height: 8rem;
    padding-top: 1rem;
    background-color: transparent;
`;
const NavMenu = styled.div`
    margin: 2rem;
    width: 3rem;
    height: 2rem;
    position: relative;
    
    span:first-child { 
        background-color: #7100F1;
        width: 100%;
        position: absolute;
        top: 3px;
        height: 4px;
        border-radius: 1rem;
        display: block;
        transition: all 1.5s;
    }
    span:nth-child(2){
        background-color: #7100F1;
        width: 80%;
        height: 4px;
        position: absolute;
        top: 13px;
        right: 0;
        border-radius: 1rem;
        display: block;
        transition: all 1s;
    }
    span:nth-child(3){
        background-color: #7100F1;
        position: absolute;
        top: 24px;
        right: 0;
        width: 60%;
        height: 4px;
        border-radius: 1rem;
        display: block;
        transition: all .5s;
    }
    &:hover{
    span:first-child, 
    span:nth-child(2),
    span:nth-child(3){
        background-color: white;
    }
    }
`;

const Header = () => {
    
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [isNavBarRightVisible, setIsNavBarRightVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const handleNavMenuClick = () => {
        setIsNavBarRightVisible(!isNavBarRightVisible);
    };

    return (
        <NavBar>
            <Img/>
            {screenSize < 700 ? <NavMenu onClick={handleNavMenuClick}>
                <span></span>
                <span></span>
                <span></span>
            </NavMenu> :
                <Nav>
                    <Link to="/"><ButtonNav text="Home" /></Link>
                    <Link to="/About"><ButtonNav text="About me" /></Link>
                    <Link to="/Technologies"><ButtonNav text="Technologies" /></Link>
                    <Link to="/Projects"><ButtonNav text="Projects" /></Link>
                    <Link to="/Contact"><ButtonNav text="Contact" /></Link>
                </Nav>}
                {isNavBarRightVisible && screenSize < 700 && <NavBarRight closeNavBar={handleNavMenuClick}/>}
            <Outlet />
        </NavBar>
    );
}

export default Header;
