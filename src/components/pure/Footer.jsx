import { styled } from "styled-components";

const Footer_Body = styled.footer `
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
        background-color: #0000008c;
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
    return (
        <Footer_Body>
        <Text href="https://www.linkedin.com/in/mauricio-mores-b3898817b/"> Full Stack Java Developer {'= ( ) =>'}
        {'{'}<Signature>  Mauricio Mores </Signature>{'}'}</Text>
        </Footer_Body>
    );
}

export default Footer;
