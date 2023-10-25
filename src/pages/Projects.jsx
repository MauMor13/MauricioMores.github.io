import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
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

const Text = styled.p`
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
`;

const Section = styled.section`
    background-color: lightblue;
    width: 100%;
    height: 15rem;
    margin-bottom: 1rem;
`;

const Projects = () => {
    return (
        <Main>
        <ArticlePrime>
            <TitlePrime>My Projects . . .</TitlePrime>
            <Text>Explore a showcase of my diverse range of projects, each 
            representing a unique journey in the world of technology and 
            creativity.</Text>
        </ArticlePrime>
        <Section>

        </Section>
        <Section>

        </Section>
        </Main>
    );
}

export default Projects;
