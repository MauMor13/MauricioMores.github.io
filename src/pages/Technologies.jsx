import { styled } from "styled-components";
import CarouselTechnologies from "../components/container/CarouselTechnologies";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center; 
`;
const Text = styled.p`
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
`;
const ArticlePrime = styled.article`
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

const Technologies = () => {
    return (
        <Main>
            <ArticlePrime>
                <TitlePrime>LAS TECNOLOGIAS QUE HE UTILIZADO . . .</TitlePrime>
                <Text>En mis inicios como programador, aprendí a programar en los lenguajes C y C++, los cuales utilicé para la programación de microcontroladores.
                    Mi pasión por la electrónica me impulsó a adentrarme en el lenguaje Arduino, el cual está asociado con una plataforma de desarrollo basada en placas
                    electrónicas de hardware libre. A medida que avanzaba en el mundo de la programación, fui adquiriendo conocimientos en diversos lenguajes y frameworks
                    para el desarrollo web. Entre ellos, destaco el uso de Java con Spring Boot y Hibernate, así como JavaScript con las bibliotecas React y Vue.js. También
                    he trabajado con tecnologías como HTML, CSS, Bootstrap y Styled Components para la construcción de interfaces. En cuanto al control de versiones, estoy
                    familiarizado con Git y GitHub. En el ámbito de las bases de datos, he utilizado SQL y PostgreSQL para gestionar bases de datos relacionales.
                    Además de estas habilidades técnicas, también cuento con experiencia en el uso de herramientas colaborativas. He trabajado con metodologías
                    ágiles utilizando herramientas como Trello y Jira, lo que me ha permitido desempeñarme eficazmente en equipos de trabajo. Estas capacidades
                    combinadas me han permitido abordar proyectos desde diferentes perspectivas técnicas y colaborativas. </Text>
            </ArticlePrime>
            <CarouselTechnologies />
        </Main>
    );
}

export default Technologies;
