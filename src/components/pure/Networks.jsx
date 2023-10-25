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
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    animation: filterShadow 2s infinite linear ;

    @keyframes filterShadow {
        0%{
            filter: drop-shadow(0 0 5px #d500f1);
        }
        50%{
            filter: drop-shadow(0 0 5px #7100F1);
        }
        100%{
            filter: drop-shadow(0 0 5px #d500f1);
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
            <ImageNetworks img='src/assets/image/redes/linkedin.svg'></ImageNetworks>
            <LinkRedes href="https://www.linkedin.com/in/mauricio-mores-b3898817b/" >Linkedin: Mauricio Mores</LinkRedes>
        </Container>
        <Container>
            <ImageNetworks img='src/assets/image/redes/github.svg' ></ImageNetworks>
            <LinkRedes href="https://github.com/MauMor13">Git Hub: Mauricio Mores</LinkRedes>
        </Container>
        <Container>
            <ImageNetworks img='src/assets/image/redes/gmail.svg' ></ImageNetworks>
            <LinkRedes href="mailto:mauri.f.mores@gmail.com">Gmail: mauri.f.mores@gmail.com</LinkRedes>
        </Container>
        </PersonalNetworks>
    );
}

export default Networks;
