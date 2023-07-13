import { styled } from "styled-components";
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
    text-align: center;
`;
const Seccion = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    min-height: 25rem;
`;
const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
`;
const Img = styled.div`
    width: 5rem;
    height: 10rem;
    background-color: aliceblue;
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
                <Img></Img>
            </Seccion>
            <Seccion>
                <Img></Img>
                <Article>
                    <Title>Lo que podras saber de mi. . .</Title>
                    <WritingText text={`Un profesional dedicado a innovar y aprender nuevas tecnologias 
                    para desarrollar y poder resolver todo tipo de problematicas. Destaco por mi gran enfoque 
                    y trabajo en equipo, como tambien poder sobrellevar los desafios de forma autonoma.`}/>
                    
                </Article>
            </Seccion>
            <Seccion>
                <Article>
                    <Title>Lo que podras saber de mi. . .</Title>
                    <WritingText text={`Un profesional dedicado a innovar y aprender nuevas tecnologias 
                    para desarrollar y poder resolver todo tipo de problematicas. Destaco por mi gran enfoque 
                    y trabajo en equipo, como tambien poder sobrellevar los desafios de forma autonoma.`}/>
                    
                </Article>
                <Img></Img>
            </Seccion>
        </Main>
    );
}

export default About;
