import styled from "styled-components";

const LoadingContainer = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`; 
const Img = styled.div`
    background-image: url("src/assets/image/svg_20230707_232204_0000.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 30%;
    height: 30%;
`; 

const Loading = () => {
    return (
        <LoadingContainer>
            <Img></Img>
        </LoadingContainer>
    );
}

export default Loading;
