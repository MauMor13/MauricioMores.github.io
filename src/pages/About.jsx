import { styled } from "styled-components";
import ImgSwiper from "../components/pure/ImgSwiper";

const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
`;
const Title = styled.h2`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    text-align: center;
`;
const TitlePrime = styled.h1 `
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2.5rem;
    text-align: center;
`;
const Seccion = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 100%;
    min-height: 10rem;
`;
const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    min-height: 100%;
    @media (max-width:768px){
        width: 100%;
    } 
`;
const ArticlePrime = styled.article `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 100%;
`;
const Text = styled.p`
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
`;

const About = () => {
    return (
        <Main>
                <ArticlePrime>
                    <TitlePrime>Lo que podras saber de mi . . .</TitlePrime>
                    <Text>Un profesional dedicado a innovar y aprender nuevas tecnologias 
                    para desarrollar y poder resolver todo tipo de problematicas. Destaco por mi gran enfoque 
                    y trabajo en equipo, como tambien poder sobrellevar los desafios de forma autonoma.</Text>
                </ArticlePrime>
            <Seccion>
                <Article>
                    <Title>Mi Experiencia Laboral . . .</Title>
                    <Text>El amor por la tecnologia, la electronica y la programacion me a llevado a trabajar en diversos sectores del area tecnica 
                    como en la produccion de respiradores artificiales, la reparaciones de electrodomesticos, armar y programar placas electronicas con microcontroladores para el comando 
                    de electrovalvulas para la industria agropecuaria, el reacondicionamiento y mantenimiento de circuitos electricos industriales como tambien proyectos 
                    de educacion en robotica, electronica y programacion basandome en placas arduino.</Text>
                </Article>
                <ImgSwiper imgs='["src/assets/image/905857.jpg","src/assets/image/867357.jpg"]'></ImgSwiper>
            </Seccion>
            <Seccion>
                <Article>
                    <Title>Mis Hobbies son . . .</Title>
                    <Text>Cuento con multiples pasa tiempos, como la creacion y programacion de placas de desarrollo en Arduino, la impesion en 3D, 
                    la lectura, la musica, hacer ejercicio, reparar todo tipo de aparatos tanto mecanicos como electricos y salir a pasear en moto.</Text>
                    <ImgSwiper imgs='["src/assets/image/905857.jpg","src/assets/image/867357.jpg"]'></ImgSwiper>
                </Article>
            </Seccion>
        </Main>
    );
}

export default About;
