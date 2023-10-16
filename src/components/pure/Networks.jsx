import styled from "styled-components";

const PersonalNetworks = styled.section`
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 0 1rem 0 1rem;
`;

const ImageNetworks = styled.div`
    background-image: url(${(props) => props.img});
    background-position: center;
    width: 4rem;
    height: 4rem;
    background-size: contain;
    background-repeat: no-repeat;
    animation: heartBeat 1.5s infinite;
    
    @keyframes heartBeat {
        0% {
            filter: opacity(50%);
            transform: scale(0.9);
            box-shadow: inset;
        }
        50% {
            filter: opacity(100%);
            transform: scale(1);
        }
        100% {
            filter: opacity(50%);
            transform: scale(0.9);
        }
    }
`;
const Container = styled.div` 
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: baseline;
    text-align: start;
`;
const LinkRedes = styled.a`
    font-size: 1.5rem;
    margin-left: 1rem;
    text-decoration: none;
`;

const Networks = () => {
    return (
        <PersonalNetworks>
        <Container>
            <ImageNetworks img='src/assets/image/redes/linkedin-1-svgrepo-com.svg'></ImageNetworks>
            <LinkRedes href="https://www.linkedin.com/in/mauricio-mores-b3898817b/" >Linkedin: Mauricio Mores</LinkRedes>
        </Container>
        <Container>
            <ImageNetworks img='src/assets/image/iconTechnologies/github.svg' ></ImageNetworks>
            <LinkRedes href="https://github.com/MauMor13">Git Hub: Mauricio Mores</LinkRedes>
        </Container>
        <Container>
            <ImageNetworks img='src/assets/image/redes/gmail-svgrepo-com.svg' ></ImageNetworks>
            <LinkRedes href="mailto:mauri.f.mores@gmail.com">Gmail: mauri.f.mores@gmail.com</LinkRedes>
        </Container>
        </PersonalNetworks>
    );
}

export default Networks;
