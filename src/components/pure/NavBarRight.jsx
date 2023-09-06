import styled from 'styled-components';
import { Link } from "react-router-dom";
import ButtonNav from './ButtonNav';

const NavBar = styled.nav`
    background-color: rgba(0, 0, 0, 0.572);
    backdrop-filter: blur(10px);
    border-radius:1rem 0 0 1rem ;
    width: 15rem;
    height: 40vh;
    opacity: 0;
    padding: 1rem;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    contain: content;
    right: 0;
    top: 0;
    animation-name: moveAnimation;
    animation-duration: .7s;
    animation-fill-mode: forwards;

    @keyframes moveAnimation { 
    from {
        right: -200px;
        opacity: 0;
    }

    to {
        right: 0;
        opacity: 1;
    }
}`;
const ButtonNavClose = styled.div `
    position: absolute;
    width: 3rem;
    height: 3rem;
    margin: 1rem;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        animation-name: rotateAnimation;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        
        span {
            background-color: #7100F1; 
        }
    }

    @keyframes rotateAnimation { 
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(180deg);
        }
    }

    span {
        position: absolute;
        background-color: white;
        width: 100%;
        height: 7px;
        border-radius: 1rem;
        transform: rotate(45deg);
        display: block;
    }

    span:nth-child(2) {
        transform: rotate(-45deg);
    }
`;

const NavBarRight = (props) => {
    const handleButtonClick = () =>{
        props.closeNavBar();
    };

    return (
        <NavBar>
            <ButtonNavClose  onClick={handleButtonClick}>
                <span></span>
                <span></span>
            </ButtonNavClose>
            <Link to="/"><ButtonNav text="Home" /></Link>
            <Link to="/About"><ButtonNav text="About me" /></Link>
            <Link to="/Technologies"><ButtonNav text="Technologies" /></Link>
            <Link to="/Projects"><ButtonNav text="Projects" /></Link>
            <Link to="/Contact"><ButtonNav text="Contact" /></Link>
        </NavBar>
    );
}

export default NavBarRight;
