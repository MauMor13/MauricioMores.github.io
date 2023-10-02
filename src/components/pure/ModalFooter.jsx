import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import ButtonDownload from '../container/ButtonDownload.jsx';
import Networks from './Networks.jsx'

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999; 
    backdrop-filter: blur(10px); 
    transition: opacity 0.7s ease-in-out; 
    opacity: ${props => (props.modalFooterVisible ? '0' : '1')};
`;

const Modal = styled.div`
    margin: 1rem; 
    background: rgba(0, 0, 0, 0.5); 
    contain: content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;
    border-radius: 1.5rem;
    position: relative;
    height: 30rem;
    width: 30rem;
    animation: appearsBelow .5s;
    animation-timing-function: linear;

    @keyframes appearsBelow {
    0%{
        transform: scale(.2);
        opacity: 0;
    }
    50%{
        transform: scale(.7);
        opacity: 0.5;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
    }
`;
const CloseModal = styled.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
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
        height: 5px;
        border-radius: 1rem;
        transform: rotate(45deg);
        display: block;
    }

    span:nth-child(2) {
        transform: rotate(-45deg);
    }
`;
const Title = styled.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ModalFooter = (props) => {
    return (
        <Overlay>
            <Modal>
                <CloseModal onClick={props.closeModal}>
                    <span></span>
                    <span></span>
                </CloseModal>
                <Title>Contact Me</Title>
                <Networks />
                <ButtonDownload />
            </Modal>
        </Overlay>
    );
};


ModalFooter.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalFooterVisible: PropTypes.bool.isRequired
};


export default ModalFooter;
