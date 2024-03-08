import { styled } from "styled-components";
//import ImgTextWrapp from "../components/container/ImgTextWrapp";
//import img1 from "../assets/image/imgProyect/fondo2.png";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
`;
const TitlePrime = styled.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
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

const About = () => {
    return (
        <Main>
            <ArticlePrime>
                <TitlePrime>What you can know about me. . .</TitlePrime>
                <Text>A professional dedicated to innovating and learning new technologies
                    to develop and be able to solve all types of problems. I stand out for my great focus
                    and teamwork, as well as being able to overcome challenges independently.</Text>
            </ArticlePrime>
            <ContainCards>
                {/*<ImgTextWrapp title="Hobbies" text="hola" img={img1} />*/}
            </ContainCards>
            
        </Main>
    );
}

export default About;
