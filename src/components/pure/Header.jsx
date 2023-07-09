import ButtonNav from './ButtonNav';
import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';


const NavBar = styled.header `
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100vw;
    height: 7rem;
`;
const Nav = styled.nav` 
    width: 40rem;
    display: flex;
    justify-content: space-evenly;

`;
const Img = styled.div `
    background-image: url(src/assets/image/svg_20230707_232204_0000.svg);
    background-position: center;
    background-size: cover;
    position: absolute;
    background-color: transparent;
    top: .3rem;
    left: .3rem;
    width: 10rem;
    height: 10rem;
`;

const Header = () => {
    return (
        <NavBar>
            <Img></Img>
            <Nav>
                <Link to="/"><ButtonNav text="Home"/></Link>
                <Link to="/About"><ButtonNav text="About me"/></Link>
                <Link to="/Contact"><ButtonNav text="Contact"/></Link>
            </Nav>
            <Outlet />
        </NavBar>
    );
}

export default Header;
