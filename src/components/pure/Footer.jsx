import { styled } from "styled-components";
import ModalFooter from "./ModalFooter";
import { useState } from "react";

const Footer_Body = styled.footer`
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem 0 2rem;
`;
const Text = styled.button`
    text-decoration: none;
    background-color: black;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 12px;
    font-family: 'Courier New', Courier, monospace;
    padding: .5rem;
    position: relative;
    ::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg, #7100F1, #00000075,
        );
        background-size: 800%;
        border-radius: 10px;
        animation: glowing 10s linear infinite;
        @keyframes glowing {
            0%{
                background-position: 0 0;
            }
            50%{
                background-position: 400% 0;
            }
            100%{
                background-position: 0 0;
            }
        }
    }
    &:hover{
        
    } 
`;
const Signature = styled.span`
    font-size: 1.3rem;
    color: white;
    font-family: 'Black_Ashpalt','Courier New', Courier, monospace;
`;

const Footer = () => {
    const [isModalFooterVisible, setIsModalFooterVisible] = useState(false);

    const handleModalFooterClick = () => {
        setIsModalFooterVisible(!isModalFooterVisible);
    };

    return (
        <Footer_Body>
            {isModalFooterVisible && <ModalFooter closeModal={handleModalFooterClick} modalFooterVisible={isModalFooterVisible} />}
            <Text onClick={handleModalFooterClick}> Full Stack Java Developer {'= ( ) =>'}
                {'{'}<Signature>  Mauricio Mores </Signature>{'}'}</Text>
        </Footer_Body>
    );
}

export default Footer;
