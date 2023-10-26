import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
`;

const InitText = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 100%;
`;

const TitlePrime = styled.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
`;

const Text = styled.p`
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
`;

const ContainCards = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    vertical-align: center;
`;

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

const TitleCard = styled.h2`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
`;

const TextCard = styled.p`
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1rem;
    padding-top: 1rem;
    text-align: center;
`;

const ButtonCard = styled.button`
    padding: .3rem;
    border-radius: .5rem;
    border: none;
    background-color: black;
    color: white;
    text-align: center;
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
`;

const Projects = () => {
    return (
        <Main>
            <InitText>
                <TitlePrime>My Projects . . .</TitlePrime>
                <Text>Explore a showcase of my diverse range of projects, each
                    representing a unique journey in the world of technology and
                    creativity.</Text>
            </InitText>
            <ContainCards>
                <Card img={'src/assets/image/imgProyect/pexels-guilherme-rossi-1755693.jpg'}>
                    <Logo src='src/assets/image/imgProyect/Logo.svg'></Logo>
                    <ContentCard>
                        <TitleCard>Diamond Bank</TitleCard>
                        <TextCard>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, 
                        dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper 
                        congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est 
                        eleifend mi, non fermentum diam nisl sit amet erat.
                        </TextCard>
                        <ButtonCard>More . . .</ButtonCard>
                    </ContentCard>
                </Card>
                <Card img={'src/assets/image/imgProyect/banner0.jpg'}>
                    <Logo src='src/assets/image/imgProyect/iconoFondoNegroPNG.png'></Logo>
                    <ContentCard>
                        <TitleCard>Adstore Detailing</TitleCard>
                        <TextCard>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, 
                        dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper 
                        congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est 
                        eleifend mi, non fermentum diam nisl sit amet erat.
                        </TextCard>
                    </ContentCard>
                </Card>
                <Card img={'src/assets/image/imgProyect/fondo2.png'}>
                    <Logo src='src/assets/image/imgProyect/patitasFelices.png' style={{ height: '2rem' }}></Logo>
                    <ContentCard>
                        <TitleCard>Happy Paws</TitleCard>
                        <TextCard>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, 
                        dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper 
                        congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est 
                        eleifend mi, non fermentum diam nisl sit amet erat.
                        </TextCard>
                    </ContentCard>
                </Card>
                <Card img={'src/assets/image/imgProyect/robots.webp'}>
                    <Logo src='src/assets/image/imgProyect/friendly-robot-waving-full-body.svg'></Logo>
                    <ContentCard>
                        <TitleCard>Programming and Robotics</TitleCard>
                        <TextCard>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, 
                        dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper 
                        congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est 
                        eleifend mi, non fermentum diam nisl sit amet erat.
                        </TextCard>
                    </ContentCard>
                </Card>
            </ContainCards>
        </Main>
    );
}

export default Projects;
