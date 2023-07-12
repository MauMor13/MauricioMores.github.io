import styled from "styled-components";
import { useEffect , useRef } from "react";

const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
`;

const Title = styled.h1`
    font-family:   'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
`;

const TextOne = styled.span`
    font-family: 'Courier New', Courier, monospace;
    display: block;
    min-height: 20rem;
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
`;

const Article = styled.article`
    max-width: 40rem;
    min-height: 30rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ToBlink = styled.div`
    animation: alternate 1s infinite;

    @keyframes alternate {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }`;

const Home = () => {
    const text = ' hola';
    /* `En este espacio, les presento un recorrido por mis logros,
    habilidades y proyectos destacados. Cada elemento ha sido cuidadosamente
    seleccionado para reflejar mi dedicación, experiencia y visión única en el campo
    del desarrollo web y la programación en todo su esplendor.
    ¡Los invito a explorar mi portafolio y a descubrir cómo juntos podemos
    hacer realidad grandes ideas! No dudes en contactarme para futuras colaboraciones o cualquier
    consulta que puedas tener.`;*/

    const textRef = useRef(null);

    useEffect(() => {
        const element = textRef.current;
        let index = 0;
        let time = 100;
        writingChar();
        function writingChar() {
            let timeMax = 60;
            let timeMin = 30;
            if (text.charAt(index) == " ") {
                time = Math.random() * (timeMax - timeMin) + timeMin;
            } else {
                time = 100;
            }
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(writingChar, time);
            }
        }
    }, [text]);

    return (
        <Main>
            <Article>
                <Title>Descubre mi portafolio y sumergete en un viaje unico de talento y pasion</Title>
                <div>
                    <TextOne><span ref={textRef}></span>
                    <ToBlink>│</ToBlink>
                    </TextOne>
                    
                </div>
            </Article>
        </Main>
    );
}

export default Home;
