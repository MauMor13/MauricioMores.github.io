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
    min-height: 5rem;
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
                        I had the opportunity to develop a full-fledged web banking application, 
                        incorporating technologies such as HTML, CSS, JavaScript, Vue.js, and 
                        Bootstrap for the frontend, and Java with Spring for the backend. The 
                        application features a client account system, online loan request and 
                        approval functionality, among other features, in addition to an attractive 
                        and responsive design.
                        </TextCard>
                        <ButtonCard href='https://github.com/MauMor13/Homebanking'>More . . .</ButtonCard>
                    </ContentCard>
                </Card>
                <Card img={'src/assets/image/imgProyect/banner0.jpg'}>
                    <Logo src='src/assets/image/imgProyect/iconoFondoNegroPNG.png'></Logo>
                    <ContentCard>
                        <TitleCard>Adstore Detailing</TitleCard>
                        <TextCard>
                        This project was the result of the collaboration of a team of five people, 
                        in which I had the honor of leading. It was developed for a company specializing 
                        in vehicle washing and polishing, which also offers a wide range of cleaning and 
                        maintenance products. We used various technologies to bring to life a highly aesthetic 
                        and fully responsive website. The website includes features such as appointment 
                        scheduling and inventory control for both services and products. This project 
                        not only allowed us to showcase our technical skills but also our ability to 
                        work as a team and lead a project from its conception to its implementation. 
                        I am proud to have led this effort and delivered a comprehensive solution for 
                        our client, enhancing their online presence and streamlining their business management.
                        </TextCard>
                        <ButtonCard href='https://github.com/MauMor13/Proyecto-Adstore-Detailing'>More . . .</ButtonCard>
                    </ContentCard>
                </Card>
                <Card img={'src/assets/image/imgProyect/fondo2.png'}>
                    <Logo src='src/assets/image/imgProyect/patitasFelices.png' style={{ height: '2rem' }}></Logo>
                    <ContentCard>
                        <TitleCard>Happy Paws</TitleCard>
                        <TextCard>
                        I had the privilege of being part of a beautiful project carried out for a veterinary clinic. 
                        We developed a visually appealing and distinctive website that followed a specific layout. 
                        To efficiently manage our team´s tasks, we utilized the Trello platform, which established 
                        an agile and collaborative work dynamic.

                        Our focus was on creating an exceptional frontend. The vision was to transform the website into 
                        an e-commerce platform for the sale of toy products and pharmaceutical items. Initially, we concentrated 
                        on developing an attractive frontend with a user-friendly interface.

                        In the next phase of the project, we plan to implement a robust backend with the necessary business logic. 
                        This will enable us to manage product stock effectively and facilitate the payment process for sales 
                        through online payment methods.
                        </TextCard>
                        <ButtonCard href='https://github.com/MauMor13/patitas_felices'>More . . .</ButtonCard>
                    </ContentCard>
                </Card>
                <Card img={'src/assets/image/imgProyect/robots.webp'}>
                    <Logo src='src/assets/image/imgProyect/friendly-robot-waving-full-body.svg'></Logo>
                    <ContentCard>
                        <TitleCard>Programming and Robotics</TitleCard>
                        <TextCard>
                        I am currently leading an educational project at a technical school that focuses on teaching the 
                        fundamental concepts of robotics and programming using Arduino technology as the foundation. Through 
                        a combination of practical tasks and theoretical lessons, we strive to transform these concepts into 
                        the realization of small automated robots capable of collision-free movement, thanks to the use of 
                        ultrasonic sensors.

                        Our project also involves the demonstration and application of various other sensors and components, 
                        temperature sensors, and infrared transmitters-receivers. These components not only enhance our 
                        understanding of the technology but also pave the way for their integration into a wide range 
                        of projects.

                        This educational initiative not only equips students with vital skills in robotics and programming but 
                        also fosters a hands-on, exploratory learning experience that ignites creativity and innovation. I am 
                        proud to be part of this endeavor, guiding students towards a future enriched with technological knowledge 
                        and possibilities.
                        </TextCard>
                        <ButtonCard href='src/assets/image/imgProyect/Programacion_y_Robotica.pdf' download={'Programacion_y_Robotica'}>More . . .</ButtonCard>
                    </ContentCard>
                </Card>
            </ContainCards>
        </Main>
    );
}

export default Projects;
