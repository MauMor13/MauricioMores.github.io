import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const Btn = styled.button`
    padding: .5rem;
    border: none;
    border: 1px solid #7100F1;
    border-radius: .5rem ;
    font-size: 1rem;
    color: white;
    position: relative;
    overflow: hidden;
    transition: .5s all ;
    
    &:after,&:before {
        content: '';
        position: absolute;
        height: 4px;
        width: 3rem;
        left: -3rem;
        transform: translateX(-50%);
        background-color: #7100F1;
        transition: 1s all ;
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
        color: #7100F1;
        border: 1px solid #7100F1;
        border-radius: .5rem ;

    &:after,&:before {
        left: 10rem;
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
    text: PropTypes.string,
}
export default ButtonNav;
