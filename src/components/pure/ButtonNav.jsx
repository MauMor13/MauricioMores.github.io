import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const Btn = styled.button`
    font-family: 'Aesthetic','Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: .5rem;
    background-color: transparent;
    border: none;
    border-radius: .5rem ;
    font-size: 1rem;
    position: relative;
    overflow: hidden;
    transition: 1.5s all ;
    
    &:after,&:before {
        content: '';
        position: absolute;
        height: 4px;
        width: 3rem;
        left: -3rem;
        transform: translateX(-50%);
        background-color: #7100F1;
        transition: 1.5s all ;
    }

    &:after{
        top: 0;
        transform: rotate(45deg);
    }
    &:before{
        bottom: 0;
        transform: rotate(-45deg);
    }
    &:hover {
        color: #8f30fd;
        border: none;

    &:after,&:before {
        left: 6.5rem;
    }
    }
    `;

const ButtonNav = ({ text }) => {
    return (
        <Btn>
            {text}
        </Btn>
    );
}
ButtonNav.prototype = {
    text : PropTypes.string,
}
export default ButtonNav;
