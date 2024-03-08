import { styled } from "styled-components";
import PropTypes from 'prop-types';

const ContainCard = styled.article`
    background-image: url(${(props) => props.img});
    filter: drop-shadow(-5px -5px 8px #ffffff86);
    
    background-position: start;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: .5rem;
    width: 10rem;
    height: 20rem;
    position: relative;
    transition: all .5s;
    &:hover {
        width: 30rem;
        &::after {
            animation: scroll_text 2s linear;
        }
    }
    &::before {
        width: 30rem;
        height: 20rem;
        content: ${(props) => props.text};
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #000000a3;
    }
    &::after{
        width: 30rem;
        height: 20rem;
        border-top-left-radius: 60%;
        position: absolute;
        top:100%;
        left: 50%;
        transform: translate(50%, -50%);
        content: '';
        background-color: blue;
    }
    @keyframes scroll_text {
        0%{
        top:100%;
        left: 50%;
        transform: translate(50%, -50%);
        }
        100%{
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        }

    }
`;

const Title = styled.h2` 
    font-family: 'Courier New', Courier, monospace;
    margin: 1rem;
    color: white;
    text-shadow: 2px 2px #27272781;
    width: 90%;
    height: 5rem;
`;


const ImgTextWrapp = (props) => {
    return (
        <ContainCard img={props.img}>
        <Title>{props.title}</Title>
        </ContainCard>
    );
}

ImgTextWrapp.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}
export default ImgTextWrapp;
