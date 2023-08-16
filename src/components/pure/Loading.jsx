import styled from "styled-components";


const Container = styled.div` 
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Img = styled.div`
    background-image: url(src/assets/image/svg_20230707_232204_0000.svg);
    background-position: center;
    background-size: cover;
    background-color: transparent;
    width: 40vw;
    height: 40vw;
    animation: heartBeat 1.5s infinite;
    
    @keyframes heartBeat {
        0% {
            filter: opacity(30%);
            transform: scale(1);
            box-shadow: inset;
        }
        50% {
            filter: opacity(100%);
            transform: scale(1.2);
        }
        100% {
            filter: opacity(30%);
            transform: scale(1);
        }
    }
`;

const Loading = () => {
    return (
        <Container>
            <Img></Img>
        </Container>
    );
}

export default Loading;
