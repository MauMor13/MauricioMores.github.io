import PropTypes from 'prop-types';
import { styled } from 'styled-components';

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
    border: 2px solid black;
    border-radius: 1.5rem;
    animation: appearsBelow 1s forwards;

    @keyframes appearsBelow {
        from {
        position: absolute;
        height: 5rem;
        width: 5rem;
        bottom: 0;
        right: 50%;
        transform: translate(0%,50%);
        opacity: 0;
    }

    to {
        height: 20rem;
        width: 30rem;
        position: relative;
        opacity: 1;
    }
    }
`;
const CloseModal = styled.div`
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

const ModalFooter = (props) => {
    return (
        <Overlay show={props.modalFooterVisible}>
            <Modal>
                <CloseModal onClick={props.closeModal}>
                    <span></span>
                    <span></span>
                </CloseModal>
            </Modal>
        </Overlay>
    );
};


ModalFooter.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalFooterVisible: PropTypes.bool.isRequired
};


export default ModalFooter;
