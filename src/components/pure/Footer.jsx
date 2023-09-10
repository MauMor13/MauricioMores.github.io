import { styled } from "styled-components";
import ModalFooter from "./ModalFooter";
import { useState } from "react";

const Footer_Body = styled.footer `
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem 0 2rem;
`;
const Text = styled.a `
    text-decoration: none;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    padding: 0 1rem 0 1rem;
    border-bottom: 2px solid #7100F1;
    border-radius:0 0 1rem 1rem;
    &:hover{
        background-color: black;
        border-bottom: 4px solid #7100F1;
        border-radius:1rem;
    } 
`;
const Signature = styled.span `
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
            {isModalFooterVisible && <ModalFooter closeModal={handleModalFooterClick} modalFooterVisible={isModalFooterVisible}/>}
            <Text onClick={handleModalFooterClick}> Full Stack Java Developer {'= ( ) =>'}
            {'{'}<Signature>  Mauricio Mores </Signature>{'}'}</Text>
        </Footer_Body>
    );
}

export default Footer;
