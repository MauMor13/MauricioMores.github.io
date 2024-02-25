import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.article`
    background-image: url(${(props) => props.img});
    filter: drop-shadow(-5px -5px 8px #ffffff86);
    background-position: start;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 2rem;
    width: 36rem;
    height: 20rem;
    margin: 1rem;
    position: relative;
    overflow: hidden;
    &:hover {
        div{
            left: 0;
        }
    }
`;

const ContentCard = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 2rem;
    left: -100%;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000000a3;
    transition: all 2s;
`;

const Logo = styled.img`
    height: 10rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(-5px 0 8px #383636a1);
    animation: jumpsLogo 1s infinite;

    @keyframes jumpsLogo {
        0%{
            top:50%
        }
        50%{
            top:45%;
        }
        100%{
            top:50%
        }
    }
`;

const ButtonCard = styled.a`
    cursor: pointer;
    margin-bottom: 1rem;
    text-decoration: none;
    padding: .3rem;
    border-radius: .5rem;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    text-align: center;
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    position: relative;
    overflow: hidden;
    transition: all 3s;
    &:hover{
        border: 2px solid black;
        color: black;

        &::before{
            animation: desplaceBefore 1.5s forwards;
            @keyframes desplaceBefore {
                0%{
                    right: 110%;
                }
                100%{
                    right: 10%;
                }
            }
        }
        &::after{
            animation: desplaceAfter 1.5s forwards;
            @keyframes desplaceAfter {
                0%{
                    left: 110%;
                }
                100%{
                    left: 10%;
                }
            }
        }
    }
    &::before{
        background-color: #8f30fd;
        content: "";
        width: 5rem;
        height: 4rem;
        top: -100%;
        right: 110%;
        transform: rotateZ(25deg);
        position: absolute;
        z-index: -1;
    }
    &::after{
        background-color: #8f30fd;
        content: "";
        width: 5rem;
        height: 4rem;
        top: -100%;
        left: 110%;
        transform: rotateZ(-25deg);
        position: absolute;
        z-index: -1;
    }
`;

const TitleCard = styled.h2`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    margin-top: 1rem;
`;

const TextCard = styled.p`
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    height: 10rem;
    padding: 0rem 1rem 0rem 1rem;
    text-align: center;
    overflow: auto;
`;


const CardProject = (props) => {
    return (
        <Card img={props.img}>
            <Logo src={props.logo}></Logo>
            <ContentCard>
                <TitleCard>{props.title}</TitleCard>
                <TextCard>
                {props.text}
                </TextCard>
                {props.download != null ? <ButtonCard href={props.href} download={props.download}>More . . .</ButtonCard> : <ButtonCard href={props.href}>More . . .</ButtonCard>}
            </ContentCard>
        </Card>
    );
}

CardProject.propTypes ={
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    download: PropTypes.string.isRequired
}

export default CardProject;
