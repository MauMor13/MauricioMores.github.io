import { styled } from "styled-components";

const Footer_Body = styled.footer `
    background-color: white;
`;
const Title = styled.footer `
    color: black;
`;

const Footer = () => {
    return (
        <Footer_Body>
        <Title>soy el footer</Title>
        </Footer_Body>
    );
}

export default Footer;
