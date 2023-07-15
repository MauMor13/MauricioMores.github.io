import { styled } from "styled-components";
import ImgAbout from "../components/pure/ImgAbout";
import WritingText from "../components/container/WritingText";

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
    font-size: 2rem;
    width: min(50rem ,50rem);
    text-align: center;
`;
const Seccion = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 25rem;
`;
const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    max-width: 50rem;
    min-height: 100%;
`;

const About = () => {
    return (
        <Main>
            <Seccion>
                <Article>
                    <Title>Lo que podras saber de mi. . .</Title>
                    <WritingText text={`Un profesional dedicado a innovar y aprender nuevas tecnologias 
                    para desarrollar y poder resolver todo tipo de problematicas. Destaco por mi gran enfoque 
                    y trabajo en equipo, como tambien poder sobrellevar los desafios de forma autonoma.`}/>
                    
                </Article>
                <ImgAbout imgOne='src/assets/image/MauricioMores.jpeg' imgTwo='src/assets/image/MauricioMores.jpeg'></ImgAbout>
            </Seccion>
            <Seccion>
                <ImgAbout imgOne='' imgTwo=''></ImgAbout>
                <Article>
                    <Title>Mi Pasion. . .</Title>
                    <WritingText text={`Disfruto mucho los desafios y el constante aprendizaje para poder construir o reparar 
                    todo tipo de cosas, desde codigo a diseños en 3D para imprimir o repara todo tipo de articulos electronicos o mecanicos.`}/>
                </Article>
            </Seccion>
            <Seccion>
                <Article>
                    <Title>Mis Hobbis son. . .</Title>
                    <WritingText text={`Un profesional dedicado a innovar y aprender nuevas tecnologias 
                    para desarrollar y poder resolver todo tipo de problematicas. Destaco por mi gran enfoque 
                    y trabajo en equipo, como tambien poder sobrellevar los desafios de forma autonoma.`}/>
                    
                </Article>
                <ImgAbout imgOne='' imgTwo=''></ImgAbout>
            </Seccion>
        </Main>
    );
}

export default About;
