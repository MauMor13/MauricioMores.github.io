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
    min-width: 4rem;
    height: 4rem;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            30deg, #d500f1, #6000f1, #7100F1, #6000f1, #d500f1, #7100F1
        );
        background-size: 800%;
        border-radius: 50%;
        filter: blur(8px);
        animation: glowing 20s linear infinite;
    }

    @keyframes glowing {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
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
    width: 7rem;
    text-decoration: none;
    flex-grow: 1;
    word-wrap: break-word;
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
