import { styled } from "styled-components";
import CarouselTechnologies from "../components/container/CarouselTechnologies";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center; 
    overflow: hidden;
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
    margin-bottom: 1rem;
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
                <TitlePrime>THE TECHNOLOGIES I HAVE USED . . .</TitlePrime>
                <Text>I’m a programmer with experience in a variety of languages and 
                technologies. I started with C and C++ for microcontroller programming, 
                and then delved into Arduino for hardware development. In web 
                development, I’ve worked with Java, Spring Boot, Hibernate, JavaScript, 
                React, Vue.js, HTML, CSS, Bootstrap, Swiper, and Styled Components. I’m familiar 
                with version control using Git and GitHub. As for databases, I’ve used 
                SQL and PostgreSQL. In addition, I have collaborative work experience 
                using agile methodologies and tools like Trello and Jira.</Text>
            </ArticlePrime>
            <CarouselTechnologies />
        </Main>
    );
}

export default Technologies;
