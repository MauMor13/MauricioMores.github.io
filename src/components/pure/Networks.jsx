import styled from "styled-components";
import imgLinkedin from '../../assets/image/redes/linkedin.svg';
import imgGithub from '../../assets/image/redes/github.svg';
import imgGmail from '../../assets/image/redes/gmail.svg';

const PersonalNetworks = styled.section`
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 0 1rem 0 1rem;
`;

const ImageNetworks = styled.img`
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

const Container = styled.a` 
    width: 100%;
    height: 5rem;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: baseline;
    text-align: start;
`;
const LinkRedes = styled.p`
    font-size: 1.5rem;
    margin-left: 1rem;
    width: 7rem;
    flex-grow: 1;
    word-wrap: break-word;
`;

const Networks = () => {
    return (
        <PersonalNetworks>
        <Container target="_blank" href="https://www.linkedin.com/in/mauricio-mores-b3898817b/">
            <ImageNetworks src={imgLinkedin} ></ImageNetworks>
            <LinkRedes>Mauricio Mores</LinkRedes>
        </Container>
        <Container target="_blank" href="https://github.com/MauMor13">
            <ImageNetworks src={imgGithub} ></ImageNetworks>
            <LinkRedes >MauMor13</LinkRedes>
        </Container>
        <Container target="_blank" href="mailto:mauri.f.mores@gmail.com">
            <ImageNetworks src={imgGmail} ></ImageNetworks>
            <LinkRedes >mauri.f.mores@gmail.com</LinkRedes>
        </Container>
        </PersonalNetworks>
    );
}

export default Networks;
