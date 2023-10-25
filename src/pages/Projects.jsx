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
    border-radius: 1rem;
    width: 36rem;
    height: 20rem;
    margin: 1rem;
    background-color: red;
`;

const TextCard = styled.p `
    font-family: 'Courier New', Courier, monospace;
    display: block; 
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
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
                <Card>
                    <TextCard>
                    
                    </TextCard>
                </Card>
                <Card>
                    <TextCard>

                    </TextCard>
                </Card>
                <Card>
                    <TextCard>

                    </TextCard>
                </Card>
                <Card>
                    <TextCard>

                    </TextCard>
                </Card>
            </ContainCards>
        </Main>
    );
}

export default Projects;
