import styled from 'styled-components';
import CardProject from '../components/container/CardProject';
import imgCardOne from '../assets/image/imgProyect/pexels-guilherme-rossi-1755693.jpg';
import logoCardOne from '../assets/image/imgProyect/Logo.svg';
import imageCardTwo from '../assets/image/imgProyect/banner0.jpg';
import logoCardtwo from '../assets/image/imgProyect/iconoFondoNegroPNG.png';
import imgCardThree from '../assets/image/imgProyect/fondo2.png';
import logoCardThree from '../assets/image/imgProyect/patitasFelices.svg';
import imgCardFour from '../assets/image/imgProyect/robots.webp';
import logoCardFour from '../assets/image/imgProyect/friendly-robot-waving-full-body.svg';
import hrefCardFour from '../assets/image/imgProyect/Programacion_y_Robotica.pdf';

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
                <CardProject img={imgCardOne} logo={logoCardOne} title="Diamond Bank" href="https://github.com/MauMor13/Homebanking"
                text="I had the opportunity to develop a full-fledged web banking application, 
                        incorporating technologies such as HTML, CSS, JavaScript, Vue.js, and 
                        Bootstrap for the frontend, and Java with Spring for the backend. The 
                        application features a client account system, online loan request and 
                        approval functionality, among other features, in addition to an attractive 
                        and responsive design." />
                <CardProject img={imageCardTwo} logo={logoCardtwo} title="Adstore Detailing" href="https://github.com/MauMor13/Proyecto-Adstore-Detailing" 
                text=" This project was the result of the collaboration of a team of five people, 
                        in which I had the honor of leading. It was developed for a company specializing 
                        in vehicle washing and polishing, which also offers a wide range of cleaning and 
                        maintenance products. We used various technologies to bring to life a highly aesthetic 
                        and fully responsive website. The website includes features such as appointment 
                        scheduling and inventory control for both services and products. This project 
                        not only allowed us to showcase our technical skills but also our ability to 
                        work as a team and lead a project from its conception to its implementation. 
                        I am proud to have led this effort and delivered a comprehensive solution for 
                        our client, enhancing their online presence and streamlining their business management." />
                <CardProject img={imgCardThree} logo={logoCardThree} title="Happy Paws" href="https://github.com/MauMor13/patitas_felices" 
                text="I had the privilege of being part of a beautiful project carried out for a veterinary clinic. 
                        We developed a visually appealing and distinctive website that followed a specific layout. 
                        To efficiently manage our team´s tasks, we utilized the Trello platform, which established 
                        an agile and collaborative work dynamic.
                        Our focus was on creating an exceptional frontend. The vision was to transform the website into 
                        an e-commerce platform for the sale of toy products and pharmaceutical items. Initially, we concentrated 
                        on developing an attractive frontend with a user-friendly interface.
                        In the next phase of the project, we plan to implement a robust backend with the necessary business logic. 
                        This will enable us to manage product stock effectively and facilitate the payment process for sales 
                        through online payment methods." />
                <CardProject img={imgCardFour} logo={logoCardFour} title="Programming and Robotics" href={hrefCardFour} download="Programacion_y_Robotica"
                text="I am currently leading an educational project at a technical school that focuses on teaching the 
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
                        and possibilities." />{/*  */}
            </ContainCards>
        </Main>
    );
}

export default Projects;
