import styled from "styled-components";
import WritingText from "../components/container/WritingText";

const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
`;

const Title = styled.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
`;

const Article = styled.article`
    max-width: 40rem;
    padding-bottom: 2rem;
`;

const Home = () => {
    return (
        <Main>
            <Article>
                <Title>Descubre mi portafolio y sumergete en un viaje unico de talento y pasion</Title>
                <WritingText text={`En este espacio, les presento un recorrido por mis logros,
                habilidades y proyectos destacados. Cada elemento ha sido cuidadosamente
                seleccionado para reflejar mi dedicación, experiencia y visión única en el campo
                del desarrollo web y la programación en todo su esplendor.
                ¡Los invito a explorar mi portafolio y a descubrir cómo juntos podemos
                hacer realidad grandes ideas! No dudes en contactarme para futuras colaboraciones o cualquier
                consulta que puedas tener.`}/>
            </Article>
        </Main>
    );
}

export default Home;
